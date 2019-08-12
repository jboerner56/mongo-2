import React from 'react';
import TransactionList from './TransactionList';
import data from '../Data/data';
import style from '../styles/Transactions.module.css';
class Transactions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data
        }
    }
    render() {
        return (
            <div>
                <h2 className={style.expensesTitle}>
                    Transactions
                </h2>
                <div className={style.transSubTitles}>
                    <div className={style.descriptionTitle}>
                        <h2>Description</h2>
                    </div>
                    <div className={style.amountTitle}>
                        <h2>Amount</h2>
                    </div>
                </div>
                <div>
                    {this.state.data.map(data => <TransactionList data={data} />)}
                </div>
            </div>
        );
    }
}

export default Transactions;