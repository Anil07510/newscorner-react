import React, { Component } from 'react'
import Spinner from '../assets/img/Fading line.gif'

export default class Loading extends Component {
  render() {
    return (
      <div>
        <img className='my-3' src={Spinner} alt="Loading" />
      </div>
    )
  }
}
