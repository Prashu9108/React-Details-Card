import React, { Component } from 'react'

export default class Address extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
  render() {

    const {address, city, state, postalCode } = this.props.addr
    // const { cardExpire, cardNumber, cardType, currency, iban } = this.props.bank


      return (
        <div className='lead'>
            <p><i class="bi bi-pin-map-fill"></i><span className='float-end'>{address}</span></p>
            <p><i class="bi bi-globe2"></i><span className='float-end'>{city}</span></p>
            <p><i class="bi bi-map"></i><span className='float-end'>{state}</span></p>
            <p><i class="bi bi-file-zip-fill"></i><b>Code :</b><span className='float-end'>{postalCode}</span></p>
        </div>
        
      )
  }
}