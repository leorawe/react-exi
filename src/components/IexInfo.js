import React from 'react'
import styled from 'styled-components'

const About = styled.div`
    margin-top: auto;
    `
const AboutMore = styled.div`
    display: inline;
    `    
const IexInfo = () => {
  return (
    <About>
      <hr />
        <div>The  Investors Exchange (IEX) is a stock exchange for U.S. equities that is built for investors and companies.
        <AboutMore> <a href="#more">Ways use this app</a></AboutMore>.</div>
        
    </About>
  )
}

export default IexInfo
