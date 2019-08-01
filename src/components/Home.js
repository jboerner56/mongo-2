import React from 'react';
import Expenses from './Expenses';
class Home extends React.Component {
    render() {
        return (
            <div className="page-Content">
                <div className="home-Title">
                    <h1>
                        Budget
                    </h1>
                </div>
                <div className="expenses-title">
                    <Expenses />
                </div>
            </div>
            );
    }
}

export default Home;