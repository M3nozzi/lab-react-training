import React, {Component} from 'react';
import './App.css';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import RateStars from './components/RateStars';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <hr />
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="/public/img/master-card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="/public/img/visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
        <hr />
        <RateStars number="0" />
        <RateStars number="4" />
        <RateStars number="4.3" />
      </div>
    );
  }
}

export default App;
