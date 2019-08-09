import React from 'react';
import style from '../styles/TransactionList.module.css';
function TransactionList ({data}) {
    return (
        <div className={style.transList}>
            <div className={data.description}>
                <ul>
                    <li>{data.description}</li>
                </ul>
            </div>
            <div className={style.amount}>
                <ul>    
                    <li>${data.amount}</li>
                </ul>
            </div>
        </div>
    );
}

export default TransactionList;