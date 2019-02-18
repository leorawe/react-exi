import React from 'react'
import styled from 'styled-components'

const About = styled.div`
    margin-top: auto;
    `
const AboutMore = styled.button`
    display: inline;
    text-decoration: underline;
    border: none;
    color: blue;
    &:focus {
        outline: none;
        border-color: none;
        box-shadow: none;
            }
    ${'' /* &:after {
        
        content: '\\0394';
        display: inline;
        text-decoration: none;
        color: black;
        }      */}
    }
    `    

const IexInfo = (props) => {
    const {toggle, info } = props;  
    const Teach = () => (
        <p>Type a ticker symbol into the search box. Hit go. Ticker symbols are usually three letters, 
        although some are two or one. The top information of price, size and when are the last sale on the 
        IEX.  The optional company information below is from a different API, and it might give a description,
        a company name, CEO, the sector or the industry.<AboutMore onClick={toggle}>Hide how to use.</AboutMore></p>
    ) 
  return (
    <About>
      <hr />
        <div>The  Investors Exchange (IEX) is a stock exchange for U.S. equities that is built for investors and companies.
        <AboutMore onClick={toggle}> How to use to this app.</AboutMore></div>
        {!info && <Teach />}
    </About>
  )
}

export default IexInfo
