import React, { Component } from 'react'
import Transaction from './Transaction';

class Transactions extends Component {


    render() {
        return (
            <div>
                {this.props.transactions.map(t => <Transaction category={t.category} vendor={t.vendor} amount={t.amount} />)}
            </div>
        )
    }
}

export default Transactions
