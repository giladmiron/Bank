import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import Axios from 'axios';


class App extends Component {
  constructor() {
    super()
    this.insertData()
    this.state = {
        transactions: []
    }
  }

  insertData = async () => {
    let transactions = await Axios.get('http://localhost:8080/transactions')
    this.setState({
      transactions: transactions.data
    })
  }

  addDeposit = (amount, vendor, category) => {
    let updateDeposits = [...this.state.transactions]
    updateDeposits.push({
      amount: amount, vendor: vendor, category: category
    })
    this.setState({
      transactions: updateDeposits
    })
  }

  addWithdraw = (amount, vendor, category) => {
    let updateDeposits = [...this.state.transactions]
    updateDeposits.push({
      amount: amount, vendor: vendor, category: category
    })
    this.setState({
      transactions: updateDeposits
    })
  }

  render() {
    let totalAmount = 0
    this.state.transactions.map(t => totalAmount += t.amount)

    return (
      <Router>
        <div className="App">
          <h2>Total amount: {totalAmount}</h2>
          <Transactions transactions={this.state.transactions} />
          <Operations addDeposit={this.addDeposit} addWithdraw={this.addWithdraw} />
        </div>
      </Router >
    )
  }
}

export default App;
