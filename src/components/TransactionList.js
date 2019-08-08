import React from 'react';
// import style from '../styles/TransactionList';
function TransactionList ({data}) {
    return (
        <div>
        <h1>
            Transactions
        </h1>
        <ul>
            <li>{data.amount}</li>
            <li>{data.description}</li>
        </ul>
        </div>
    );
}

export default TransactionList;