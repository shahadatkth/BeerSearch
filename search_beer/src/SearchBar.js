import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
    }

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };
    onSubmit = event => {
        event.preventDefault();
        this.props.onPlaceChanged(this.state.term);
       /* this.setState({ term: "" });*/
    };

    render() {
        return (
            <form className="input-group" onSubmit={this.onSubmit}>
                <input
                    placeholder="Search beer.."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    minLength="1"
                    required
                />
                <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
            </form>
        );
    }
}
export default SearchBar;
