import React, { Component } from 'react'
import Address from "./Address"

export default class UserCard extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

  render() {
    const {firstName, lastName, image, email, id, age, birthDate, maidenName} = this.props
    return (
        <div>
            <div className='container bg-dark-subtle'>
                <div className='row justify-content-center'>
                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4 mt-2'>
                        <div className='card bg-warning-subtle'>
                            <img src={image} alt=""  className='rounded-circle border border-primary mx-5 my-3 img-fluid'/>
                            <h1 className='id text-center'>ID : {id}</h1>
                            <h4 className='text-dark text-center'>{firstName +" "+ maidenName +" "+ lastName}</h4>
                            <div className='card-body'>
                                <details>
                                    <summary>Details</summary>
                                <p className='lead'>
                                    <p><i class="bi bi-envelope"></i><span className='float-end'>{email}</span></p>
                                    <p><i class="bi bi-backpack"></i><span className='float-end'>{age}</span></p>
                                    <p><i class="bi bi-cake2"></i><span className='float-end'>{birthDate}</span></p>
                                </p>
                                    <Address addr = {this.props.address} />

                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
  }
}