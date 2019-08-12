import React from 'react';
import style from '../styles/AddTransaction.module.css';
class AddTransaction extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description: 'description',
            amount: 'amount',
        }
    }
    handleAmtChange(e) {
        this.setState({
            description: e.target.value
        });
    }
    handleDescChange(e) {
        this.setState({
            description: e.target.value
        });
    }
    AddTrans(){
        this.props.onAdd(this.state.description, this.state.amount)
    }
    render() {
        return(
            <div className={style.addTrans}>
                <input type='text' value={this.state.description} onChange={this.handleDescChange} />
                <input type='text' value={this.state.amount} onChange={this.handleAmtChange} />
                <button onClick={this.AddTrans} />
            </div>
        )
    }
}

export default AddTransaction;