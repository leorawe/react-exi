import React, { Component } from 'react'
import axios from 'axios'
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
            result: null,
            searchTerm: DEFAULT_QUERY,
            loading: false
        }
    }
  
  componentDidMount(){
      this.setState({loading: true})
     // axios(axiosExi)
     //console.log(axiosExi)
      axios.get(`https://api.iextrading.com/1.0/tops/last?symbols=${DEFAULT_QUERY}`)
       .then(result => {
           console.log(result, result.data[0].price, result.data[0].symbol, result.data[0].size)
    //       this.setState({
    //             searchTerm: data
    //           })
           })
        .catch(error => console.log(error))   
  }  
    
  render() {
    return (
      <div>
        <h1>{TITLE}</h1>
      </div>
    )
  }
}

export default App
