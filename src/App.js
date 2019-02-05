import React, { Component } from 'react'
import axios from 'axios'

import SearchBar from './components/SearchBar'
import Table from './components/Table'
import './App.css'

const TITLE = 'React GraphQL EXI Client'
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
            symbolData: {
              price: '',
              symbol: '',
              size: ''
            }
        }
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.fetchMarket = this.fetchMarket.bind(this);
        //this.onDismiss = this.onDismiss.bind(this); 
    }

    onSearchSubmit(event) {
      const { searchTerm } = this.state;
      this.fetchMarket(searchTerm);
     console.log(searchTerm, "here");
      event.preventDefault();
      }  

   onSearchChange(event) {
        console.log(event.target.value);
        this.setState({ searchTerm: event.target.value });
        
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
          .catch(error => console.log(error))   
      }  
  
  componentDidMount(){
      this.setState({loading: true})
      let search = this.state.searchTerm
      this.fetchMarket(search)
     // axios(axiosExi)
     //console.log(axiosExi)
      // axios.get(`https://api.iextrading.com/1.0/tops/last?symbols=${search}`)
      //  .then(result => {
      //      console.log(result, result.data[0].price, result.data[0].symbol, result.data[0].size)
      //     this.setState({
      //           symbolData: {
      //             price: result.data[0].price,
      //             symbol: result.data[0].symbol,
      //             size: result.data[0].size
      //           }
      //         })
      //      })
      //   .catch(error => console.log(error))   
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
    return (
      <div>
        <SearchBar 
          value={this.state.searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        />
        <Table />
        <h1>{TITLE}</h1>
        <p>Price: {this.state.symbolData.price}</p>
        <p>Symbol: {this.state.symbolData.symbol}</p>
        <p>Size: {this.state.symbolData.size}</p>
      </div>
    )
  }
}

export default App
