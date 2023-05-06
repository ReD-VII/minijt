import React from 'react'

// ROTAS
import { Link } from 'react-router-dom'

// STYLES
import { MenuConteiner } from './styles'

// LOGO
import logo from '../../assets/img/logo.svg'

// ICONES
import { IoHome } from "react-icons/io5";
import { IoIdCardOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoAlertCircle } from "react-icons/io5";

const Menu = () => {
  return (
    <MenuConteiner>
      <div className='boxes_menu_conteiner'>
        <img src={logo} alt="logo" className='logo_boxes_menu_conteiner' />
      </div>
      <div className='boxes_menu_conteiner'>
        <nav>
          <ul>
            <li>

              <Link className='boxes_links' to='/'>
                <IoHome className='boxes_menu_nav_icons' />
                <i>Home</i>
              </Link>
            </li>
            <li>
              <Link className='boxes_links' to='/profile'>
                <IoIdCardOutline className='boxes_menu_nav_icons' />
                <i>PERFIL</i>
              </Link>
            </li>
            <li>
              <Link className='boxes_links' to='/likes'>
                <IoHeart className='boxes_menu_nav_icons' />
                <i>CURTIDA</i>
              </Link>
            </li>
            <li>
              <Link className='boxes_links' to='/search'>
                <IoSearch className='boxes_menu_nav_icons' />
                <i>PESQUISA</i>
              </Link>
            </li>
            <li>
              <Link className='boxes_links' to='/aboult'>
                <IoAlertCircle className='boxes_menu_nav_icons' />
                <i>QUEM SOMOS</i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='boxes_menu_conteiner'></div>
    </MenuConteiner>
  )
}

export default Menu