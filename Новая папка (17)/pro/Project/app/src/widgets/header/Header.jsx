import React from 'react'
import Logo from '../../shared/UI/Logo/Logo'
import "./header.css"
import cart from '../../shared/icons/bx_bx-cart.svg'
import search from '../../shared/icons/gridicons_search.svg'
import "../../app/Fonts/typograhy.css"
import "../../shared/icons/icon.css"

function Header() {
  return (
    <div className='Header'>
      <nav>
        <Logo />
        <div className='nav-text nav-container'>
          <div className='selected-bg'>
              <li className='PT-sans selected-color'>ПОНРАВИЛОСЬ</li>
          </div>
          <ul>
            <li className='PT-sans func-text'>ЛИЧНЫЙ КАБИНЕТ</li>
            <li className='PT-sans func-text'>НАСТРОЙКИ</li>
            <li><img className='func-text icon-small' src={cart} alt="корзина" /></li>
            <li><img className='func-text icon-small' src={search} alt="поиск" /></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
