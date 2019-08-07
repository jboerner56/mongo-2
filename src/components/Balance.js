import React from 'react';
import style from '../styles/Balance.module.css';
const Balance = (props) => {
        return (
            <div className={style.balanceDiv}>
                <h1 className={style.balanceTitle}>Balance</h1>
                <div className={style.balanceTotal}>
                    {/* <p>${props.total.toFixed(2)}</p> */}
                    <p>$1000</p>
                </div>
            </div>
        );
}

export default Balance;