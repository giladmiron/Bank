import React, { Component } from 'react'
import Axios from 'axios';

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: 0,
            vendor: "",
            category: ""
        }
    }

    changeAmount = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    changeVendor = (event) => {
        this.setState({
            vendor: event.target.value
        })
    }

    changeCategory = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    addDeposit = () => {
        let amount = parseInt(this.state.amount)
        let vendor = this.state.vendor
        let category = this.state.category
        this.props.addDeposit(amount, vendor, category)
        let toSave = { amount: amount, vendor: vendor, category: category }
        Axios.post('http://localhost:8080/transaction', toSave, function (response) {
            console.log('saved to db')
        })
    }

    addWithdraw = () => {
        let amount = this.state.amount * -1
        let vendor = this.state.vendor
        let category = this.state.category
        this.props.addWithdraw(amount, vendor, category)
        let toSave = { amount: amount, vendor: vendor, category: category }
        Axios.post('http://localhost:8080/transaction', toSave, function (response) {
            console.log('saved to db')
        })
    }

    render() {
        return (
            <div>
                <input type="number" placeholder="amount" value={this.state.amount} onChange={this.changeAmount}></input>
                <input type="text" placeholder="Vendor" value={this.state.vendor} onChange={this.changeVendor}></input>
                <input type="text" placeholder="Category" value={this.state.category} onChange={this.changeCategory}></input>
                <button onClick={this.addDeposit}> Deposit </button>
                <button onClick={this.addWithdraw}> Withdraw </button>
            </div>
        )
    }
}

export default Operations
