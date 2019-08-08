import React from 'react';
import TransactionList from './TransactionList';
import data from '../Data/data';
class Transactions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data
        }
    }
    render() {
        return (
            <div className="expenses-Title">
                <h2>
                    Transactions
                </h2>
                <div>
                    {this.state.data.map(data => <TransactionList data={data} />)}
                </div>
            </div>
        );
    }
}

export default Transactions;