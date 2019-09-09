import React from 'react';
import style from '../styles/AddTransaction.module.css';
class AddTransaction extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description: 'description',
            amount: 'amount',
        }
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleAmtChange = this.handleAmtChange.bind(this);
    }
    handleAmtChange(e) {
        this.setState({
            amount: e.target.value,
        });
        console.log("amount change", this.state.amount)
    }
    handleDescChange(e) {
        this.setState({
            description: e.target.value
        });
        console.log("description change", this.state.description)
    }
    AddTrans(){
        this.props.onAdd(this.state.description, this.state.amount)
    }
    render() {
        return(
            <div className={style.addTrans}>
                <div className={style.addInputs}>
                    <label>Description</label>
                    <input type='text' onChange={this.handleDescChange} label='Description'/>
                    <label>Amount</label>
                    <input type='text' onChange={this.handleAmtChange} />
                </div>
                <div className={style.addButton}>
                    <button onClick={this.AddTrans}>Add Transaction</button>
                </div>
            </div>
        )
    }
}

export default AddTransaction;