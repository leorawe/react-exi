import React, { Component, Fragment } from 'react'
import axios from 'axios'

import SearchBar from './components/SearchBar'
import Table from './components/Table'
import './App.css'

const TITLE = 'React IEX Client'
const DEFAULT_QUERY = 'MET'

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
            symbolData: {
              price: '',
              symbol: '',
              size: ''
            }
        }
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.fetchMarket = this.fetchMarket.bind(this);
        this.fetchInfo = this.fetchInfo.bind(this);
    }

    onSearchSubmit(event) {
      //validate search term
      const { searchTerm } = this.state;
      this.fetchMarket(searchTerm);
      this.fetchInfo(searchTerm);
     //console.log(searchTerm, "here");
      event.preventDefault();
      }  

   onSearchChange(event) {
        //console.log(event.target.value);
        this.setState({ searchTerm: event.target.value });
        event.preventDefault();
      }  

    fetchMarket(searchTerm) {
        axios.get(`https://api.iextrading.com/1.0/tops/last?symbols=${searchTerm}`)
         .then(result => {
             console.log(result, result.data[0].price, result.data[0].symbol, result.data[0].size)
            this.setState({
                  symbolData: {
                    price: result.data[0].price,
                    symbol: result.data[0].symbol,
                    size: result.data[0].size
                  }
                })
             })
        // .catch(error => console.log(error))   
        // .catch(error => this.setState({error}))
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
              console.log('Error', error.message);
              this.setState({error});
          }
         // console.log(error.config);
      });
      }  

  fetchInfo(symbol){
    console.log(symbol);
     axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/company`)
          .then(result => {
          console.log(result.data)
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
  
  componentDidMount(){
      this.setState({loading: true})
      let search = this.state.searchTerm
      this.fetchMarket(search)
  }  

    
    //implement search box
    //where are some examples from tutorials?
    //improvements - real time search like with Algolia

    //improve CSS for outcome

    //find examples of apps that do more than one thing - mini menu?
    //layout for two - how to select two???

    //do selected and save to State
    //learn to do tests - how to show this???

  render() {
    let result;
    const {
      searchTerm,
      symbolData,
      error
      } = this.state;
    if (error) {
        console.log(error )
        let piece = `Sorry, ${searchTerm} not found! Try again`
        result = (
          <Fragment>
           <div>{piece}</div> 
          </Fragment>
        )
        }  
        else 
        {
          result = <Table 
            searchTerm = {searchTerm}
            price = {symbolData.price}
            symbol = {symbolData.symbol}
            size = {symbolData.size}
          />
        }
    return (
      <div>
        <h1>{TITLE}</h1>
        <SearchBar 
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        />
        {result}
      </div>
    )
  }
}

export default App
