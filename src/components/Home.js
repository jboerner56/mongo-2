import React from 'react';
import Expenses from './Expenses';
import Balance from './Balance';
import style from '../styles/Home.module.css';
class Home extends React.Component {
    render() {
        return (
            <div className={style.homeContent}>
                <div className={style.homeTitle}>
                    <h1>
                        Budget
                    </h1>
                </div>
                <div className="expenses-title">
                    <Expenses />
                </div>
                <div>
                    <Balance />
                </div>
            </div>
            );
    }
}

export default Home;