import React from 'react';
import Transactions from './Transactions';
// import Balance from './Balance';
import AddTransaction from './AddTransaction';
import style from '../styles/Home.module.css';
class Home extends React.Component {
    render() {
        return (
            <div className={style.homeContent}>
                <div className={style.homeTitle}>
                    <h1>
                        Transactions
                    </h1>
                </div>
                <div className={style.addTrnsactions}>
                    <AddTransaction onAdd={this.props.addTrans}/>
                </div>
                <div className="expenses-title">
                    <Transactions />
                </div>
                {/* <div>
                    <Balance />
                </div> */}
            </div>
            );
    }
}

export default Home;