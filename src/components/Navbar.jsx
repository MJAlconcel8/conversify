import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Conversify</span>
      <div className="user">
        <img src="/Users/markalconcel/Downloads/s-l400.jpeg" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
