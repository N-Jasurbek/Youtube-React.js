import React from "react";

class SearchBar extends React.Component {
    state = { term: 'Search...', clicked: false };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                            onClick={(e) => {
                                if(this.state.clicked === false) {
                                    this.setState({ term: '' , clicked: true})
                                };
                            }}
                        />
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;