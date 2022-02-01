import React from "react";
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        this.searchMovies('game')
    }

    searchMovies = (searchStr, typeStr = '') => {
        if (!searchStr.trim()) return
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com?apikey=${API_KEY}&s=${searchStr}${typeStr}`)
            .then(response => response.json())
            .then(data => {
                setTimeout(
                    () => {
                        this.setState({
                            movies: data.Search,
                            loading: false
                        })
                    }, 1500
                )
            })
            .catch((e) => {
                this.setState({loading: false})
            })
    }


    render() {
        const { movies, loading } = this.state

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>
                {
                    !loading
                        ? <MovieList movies={movies}/>
                        : <Preloader />
                }
            </main>
        )
    }
}

export default Main