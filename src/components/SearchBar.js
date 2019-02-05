import React from 'react';

class SearchBar extends React.Component  {
    state = {term: ' '};

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
       //this.props.onSubmit(this.state.term);
    }

    // onInputClick() {
    //     console.log('Input was Clicked');
    // onClick={this.onInputClick}
    // }
    //see grider pics example for search
    //add ui from there??? ui semantics
    // value={this.state.term}
    // onChange={e => this.setState({term: e.target.value})}
  
    render() {
        const { value, onChange, onSubmit } = this.props;
        return (
        <div className="ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                <label>Ticker Symbol Search: </label>
                <input type="text" placeholder="type"
                value={value}
                onChange={onChange}
                />
                <button type="submit">
                go
                </button>
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;