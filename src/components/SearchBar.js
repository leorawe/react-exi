import React from 'react';
import styled from 'styled-components'

const SearchBar =(props)=> {
    
    // onInputClick() {
    //     console.log('Input was Clicked');
    // onClick={this.onInputClick}
    // }
    //see grider pics example for search
    //add ui from there??? ui semantics
    // value={this.state.term}
    // onChange={e => this.setState({term: e.target.value})}
 const GoButton = styled.button`
    background: transparent;
    border-radius: 15px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: 2px solid #008b00;
    color: #008b00;
    margin: 0;
    padding: 0.25em 1em;
  `;
//   const GoInput = styled.input`
//     background: white;
//     border: 2px solid #008b00;
//     border-right: none;
//     color: #333;
//     margin: 0;
//     padding: 0.25em 1em;
//   `;
    const { value, onChange, onSubmit } = props;
        return (
        <div className="ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                <label>Ticker Symbol Search: </label>
                <input type="text" placeholder="type"
                value={value}
                onChange={onChange}
                /><GoButton type="submit">
                go
                </GoButton>
                </div>
            </form>
        </div>
        )
    }


export default SearchBar;