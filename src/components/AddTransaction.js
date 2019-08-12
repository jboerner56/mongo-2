import React from 'react';

class AddTransaction extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description: 'description',
            amount: 'amount',
        }
    }
    render() {
        return(
            <div>
                <input type='text' value={this.state.description} onChange={this.handleDescChange} />
                <input type='text' value={this.state.amount} onChange={this.handleAmtChange} />
                <button onClick={this.AddTrans} />
            </div>
        )
    }
}

export default AddTransaction;