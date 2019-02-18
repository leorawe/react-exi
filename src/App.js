import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import SearchBar from './components/SearchBar'
import Table from './components/Table'
import IexInfo from './components/IexInfo'
import './App.css'

require ('typeface-merriweather')

const TITLE = 'React IEX Client'
const DEFAULT_QUERY = 'MET'

const TitleStyle = styled.h1`
  font-family: merriweather, serif
  `
const NotFound = styled.div`
   font-style: italic;
   color: #666;
   display: inline;
`
const NotFoundTerm = styled.div`
   font-style: italic;
   color: red;
   display: inline;
`
const Wrapper = styled.div`
   margin: 0 auto;
   padding: 10px 20px;
   max-width: 600px;
   border: 1px solid #CAEAD8;
   border-radius: 3px;
   font-family: arial;
   background-color: #ffffff;
   display: flex;
   flex-direction: column;
   `

// const axiosExi = axios.create({
//   baseURL: 'https://api.iextrading.com/1.0/',
//   pathSearch: 'tops/last?symbols=',
//   query: DEFAULT_QUERY
// })

class App extends Component {
    constructor(){
        super()
        this.state = {
            searchTerm: DEFAULT_QUERY,
            loading: false,
            error: null,
            table: true,
            infoHidden: true,
            symbolData: {
              price: '',
              symbol: '',
              size: '',
              time: ''
            },
            companyInfo: {
              name: '',
              description: '',
              industry:'',
              sector:'',
              ceo: ''
            }
        }
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.toggleHidden = this.toggleHidden.bind(this);
        this.fetchMarket = this.fetchMarket.bind(this);
        this.fetchInfo = this.fetchInfo.bind(this);
    }

    onSearchSubmit(event) {
      event.preventDefault();
     // this.setState({error:null});
      //validate search term
      const { searchTerm } = this.state;
      this.fetchMarket(searchTerm);
      this.fetchInfo(searchTerm);
     //console.log(searchTerm, "here");
      
      }  

   onSearchChange(event) {
        //console.log(event.target.value);
        this.setState({ searchTerm: event.target.value });
        this.setState({error:null});
      //  console.log('why does it re-render now?')
       this.setState({table:false});
        event.preventDefault();
      }  

    toggleHidden(event) {
     // console.log('tog');
        this.setState({
          infoHidden: !this.state.infoHidden
        })
        event.preventDefault(); 
      }  

    fetchMarket(searchTerm) {
        axios.get(`https://api.iextrading.com/1.0/tops/last?symbols=${searchTerm}`)
         .then(result => {
          this.setState({error:null});
          this.setState({table:true});
          this.setState({infoHidden:true});
         // console.log(result.data[0])
          //   console.log(result, result.data[0].price, result.data[0].symbol, result.data[0].size)
            this.setState({
                  symbolData: {
                    price: result.data[0].price,
                    symbol: result.data[0].symbol,
                    size: result.data[0].size,
                    time: result.data[0].time
                  }
                })
             })

        .catch(error => 
        {
          // Error
          if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
               console.log(error.response.data);
               console.log(error.response.status);
               console.log(error.response.headers);
               this.setState({error});
          } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the 
              // browser and an instance of
              // http.ClientRequest in node.js
              console.log("Response error ", error.request);
          } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error - 3rd type', error.message);
              this.setState({error});
          }
         // console.log(error.config);
      });
      }  

  fetchInfo(symbol){
   // console.log(symbol);
     axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/company`)
          .then(result => {
          //console.log(result.data);
          this.setState({
            companyInfo: {
              name: result.data.companyName,
              ceo: result.data.CEO,
              description: result.data.description,
              industry: result.data.industry,
              sector: result.data.sector
               }
            })
          })
          .catch(error2 => 
            {
              // Error
              if (error2.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                   console.log(error2.response.data);
                   console.log(error2.response.status);
                   console.log(error2.response.headers);
                   //this.setState({error});
              } else if (error2.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the 
                  // browser and an instance of
                  // http.ClientRequest in node.js
                  console.log("Response error ", error2.request);
              } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error2.message);
                 // this.setState({error});
                }
              })
            }    

  // doReset                 
  
  componentDidMount(){
      this.setState({loading: true})
      let search = this.state.searchTerm
      this.fetchMarket(search)
      //for now do not load the info on the start screen - so there is less info at first
      //this.fetchInfo(search)
  }  

    //find examples of apps that do more than one thing - mini menu?
    //layout for two - how to select two???

    //learn to do tests - jest for render, enzyme for biz logic

    //add loading? ternary

  render() {
    let result;
    const {
      searchTerm,
      symbolData,
      companyInfo,
      infoHidden,
      table,
      error
      } = this.state;
   // const loadText = this.state.loading ? "loading..." :  "" ;
    if (error) {
        console.log('inside Render function ', error );
        let piece = `${searchTerm}`
        //maybe take everything out of State?
        result = (
          <NotFound>Sorry, <NotFoundTerm>{piece}</NotFoundTerm> not found! Try again</NotFound>
        )
        }  
       else if(table)
        {
          result = 
          <Table 
            searchTerm = {searchTerm}
            price = {symbolData.price}
            symbol = {symbolData.symbol}
            size = {symbolData.size}
            time = {symbolData.time}
            coname = {companyInfo.name}
            description = {companyInfo.description}
            sector = {companyInfo.sector}
            industry = {companyInfo.industry}
            ceo = {companyInfo.ceo}
          />
          
                  
        }

    return (
      <Wrapper>
        <TitleStyle>{TITLE}</TitleStyle>
        <SearchBar 
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        />
        {result}
      <IexInfo 
      toggle={this.toggleHidden}
      info={infoHidden}  
      /> 
      </Wrapper>
    )
  }
}

export default App
