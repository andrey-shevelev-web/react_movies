import React, {useState} from "react";

const Search = (props) => {
    const {searchMovies = Function.prototype} = props
    const [search, setSearch] = useState('game')
    const [type, setType] = useState('')

    const handleType = event => {
        setType(event.target.dataset.type)
        searchMovies(search, event.target.dataset.type)
    }

    const handleKey = event => {
        if (event.key === 'Enter') {
            searchMovies(search, type)
        }
    }

    return (
        <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button className="btn" onClick={() => searchMovies(search, type)}>Search</button>
            </div>
            <div className="filter-container">
                <label>
                    <input
                        name="type"
                        type="radio"
                        data-type=""
                        checked={type === ''}
                        onChange={handleType}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        name="type" type="radio"
                        data-type="&type=movie"
                        checked={type === '&type=movie'}
                        onChange={handleType}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        name="type"
                        type="radio"
                        data-type="&type=series"
                        checked={type === '&type=series'}
                        onChange={handleType}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    )
}

export default Search