import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    // <div style={{width: '100%', height: '100%', background: 'red'}}>
    <div style={{width: '100%', height: '100%', background: 'red'}}>

      <div style={{width: '100%', height: '500px', background: '#5544114e'}}>

      <Link to='/login' style={{color: '#fff', margin: '10px'}}>Login</Link>
      <Link to='/register' style={{color: '#fff', margin: '10px'}}>Register</Link>

      </div>
      <div style={{width: '100%', height: '500px', background: '#55447739'}}></div>
      <div style={{width: '100%', height: '500px', background: '#3322884c'}}></div>
      <div style={{width: '100%', height: '500px', background: '#2255664c'}}></div>
      <div style={{width: '100%', height: '500px', background: '#7788554e'}}></div>
      <div style={{width: '100%', height: '500px', background: '#1188884c'}}></div>
      <div style={{width: '100%', height: '500px', background: '#ccdddd40'}}></div>

    </div>
  )
}

export default Home