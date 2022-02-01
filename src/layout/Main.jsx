import React, {useState, useEffect} from "react";
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const searchMovies = (searchStr, typeStr = '') => {
        if (!searchStr.trim()) return
        setLoading(true)
        fetch(`https://www.omdbapi.com?apikey=${API_KEY}&s=${searchStr}${typeStr}`)
            .then(response => response.json())
            .then(data => {
                setTimeout(
                    () => {
                        setMovies(data.Search)
                        setLoading(false)
                    }, 1500
                )
            })
            .catch((e) => {
                setLoading(false)
            })
    }

    useEffect(() => {
        searchMovies('game')
    }, [])

    return (
        <main className="container content">
            <Search searchMovies={searchMovies}/>
            {
                loading
                    ? <Preloader />
                    : <MovieList movies={movies}/>
            }
        </main>
    )
}

export default Main