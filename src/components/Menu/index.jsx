import React from 'react'

// ROTAS
import { Link } from 'react-router-dom'

// STYLES
import { MenuConteiner } from './styles'

// LOGO
import logo from '../../assets/img/logo.svg'

// ICONES
import {
  IoHomeOutline,
  IoChatboxOutline,
  IoIdCardOutline,
  IoHeartOutline,
  IoSearch,
  IoLibraryOutline,
} from "react-icons/io5";


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
                <IoHomeOutline className='boxes_menu_nav_icons' />
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
                <IoHeartOutline className='boxes_menu_nav_icons' />
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
              <Link className='boxes_links' to='/createPost'>
                <IoChatboxOutline className='boxes_menu_nav_icons' />
                <i>Criar post</i>
              </Link>
            </li>
            <li>
              <Link className='boxes_links' to='/knowledge'>
                <IoLibraryOutline className='boxes_menu_nav_icons' />
                <i>ESTUDOS</i>
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