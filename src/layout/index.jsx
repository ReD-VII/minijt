import React, { useState } from 'react'
import { LayoutConteiner } from './styles'
import { Link, Outlet } from 'react-router-dom'
import Menu from '../components/Menu'
import UserInfo from '../components/UserInfos'
import { IoAlertCircle } from 'react-icons/io5'

const Layout = () => {
  const [display, setDisplay] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })








  return (
    <LayoutConteiner>


      <div className='boxes_layout'>
        <Menu />
      </div>


      <div className='boxes_layout'>
        <Outlet />

      </div>


      <div className='boxes_layout'>
        <UserInfo />
        
      </div>




    </LayoutConteiner>
  )
}

export default Layout