This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#  IEX API - recent transaction & company data

This app shows recent IEX transaction on the stock market.  You can look up by ticker symbol.

##  APIs  
It accesses two apis (this uses MET as an example of a symbol):  
https://api.iextrading.com/1.0/tops/last/?symbols=MET  
This one accesses provides IEX last sale price, size and time.

https://api.iextrading.com/1.0/stock/met/company  
This one shows data about a company, with the symbol being set by the search input box upon submit.

