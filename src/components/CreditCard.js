import React, {Component} from 'react';

class CreditCard extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{backgroundColor: `${this.props.bgColor}`, color: `${this.props.color}`, width: '15rem'}}>
                <img src={this.props.type === 'Visa' ? '../img/visa.png' : '../img/master-card.svg'} alt={this.props.type} style={{ width: '3rem', height: 'auto' }}/>
                <p>**** **** **** {this.props.number.substr(12,16)}</p>
                <p>{this.props.expirationMonth} / {this.props.expirationYear}   {this.props.bank}</p>
                <p>{this.props.owner}</p>   
            </div>
        );
    }
}

export default CreditCard;


