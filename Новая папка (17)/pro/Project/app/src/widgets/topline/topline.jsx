import React from 'react'
import eva_phone from '../../shared/icons/eva_phone.png'
import logIn from '../../shared/icons/ic_sharp-log-in.svg'
import "./top-line.css"
import "../../app/Fonts/typograhy.css"

function Topline() {
  return (
    <div className='container'>
      <div className='contact-data'><img src={eva_phone} alt="eva_phone" /> <p className='PT-sans optional-text'>8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00</p> </div>
      <div className='func-text contact-data'><img src={logIn} alt="" /><p className='PT-sans optional-text'>Войти / Регистрация</p></div>
    </div>
  )
}

export default Topline;
