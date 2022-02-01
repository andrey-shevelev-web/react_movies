import React, { Component } from "react";

class Search extends Component{
    state = {
        search: 'game',
        type: '',
    }

    handleFetch = () => this.props.searchMovies(this.state.search, this.state.type)

    handleType = event => {
        this.setState(() => ({type: event.target.dataset.type}),
            () => this.handleFetch())
    }

    handleKey = event => {
        if (event.key === 'Enter') {
            this.handleFetch()
        }
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="validate"
                        type="search"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={e => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    <button className="btn" onClick={this.handleFetch}>Search</button>
                </div>
                <div className="filter-container">
                    <label>
                        <input
                            name="type"
                            type="radio"
                            data-type=""
                            checked={this.state.type === ''}
                            onChange={this.handleType}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            name="type" type="radio"
                            data-type="&type=movie"
                            checked={this.state.type === '&type=movie'}
                            onChange={this.handleType}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            name="type"
                            type="radio"
                            data-type="&type=series"
                            checked={this.state.type === '&type=series'}
                            onChange={this.handleType}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        )
    }
}

export default Search