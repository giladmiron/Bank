import React, { Component } from 'react'

class Transaction extends Component {
    render() {
        return (
            <div> Category: {this.props.category} - Vendor: {this.props.vendor} - Amount: {this.props.amount} </div>
        )
    }
}

export default Transaction
