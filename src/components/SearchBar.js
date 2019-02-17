import React from 'react';
import styled from 'styled-components'
const GoButton = styled.button`
    background: #008b00;
    border-radius: 15px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: 1px solid #008b00;
    color: #fff;
    margin: 0;
    padding: 0.5em 1em;
    &:focus {
    outline: none;
    border-color: #008b00;
    box-shadow: 0 0 5px #008b00;
  }
  `;
  const GoInput = styled.input`
    background: white;
    border: 1px solid #008b00;
    border-right: none;
    color: #333;
    margin: 0;
    padding: 0.5em 1em;
    &:focus {
    outline: none;
    border-color: #008b00;
    box-shadow: 0 0 5px #008b00;
  }
  `;
 const SearchWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    background-color: white;
    `

const SearchBar =(props)=> {
    
    // onInputClick() {
    //     console.log('Input was Clicked');
    // onClick={this.onInputClick}
    // }
    //see grider pics example for search
    //add ui from there??? ui semantics
    // value={this.state.term}
    // onChange={e => this.setState({term: e.target.value})}
 
    const { value, onChange, onSubmit } = props;
        return (
        <div>
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                <label>Ticker Symbol Search: </label>
                <SearchWrapper>
                <GoInput type="text" placeholder="type"
                value={value}
                onChange={onChange}
                /><GoButton type="submit">
                go
                </GoButton></SearchWrapper>
                </div>
            </form>
        </div>
        )
    }


export default SearchBar;