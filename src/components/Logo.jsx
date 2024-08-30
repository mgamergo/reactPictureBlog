import React from 'react'
import logo from '../assets/logo.svg'

function Logo({width = '100px'}) {

  return (
    <div className='w-10 aspect-square'>
      <img src={logo} alt='Logo' />
    </div>
  )
}

export default Logo
