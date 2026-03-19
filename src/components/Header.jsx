import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Navbar from './Navbar'

export default function Header({user, logout}) {
  return (
    <header>
        <div className="inner">
            <h1 className="logo">
                <Link to='/'>
                    <img src={Logo} alt="에어비엔씨 로고" />
                    <span>AirBnc</span>
                </Link>
            </h1>
            <Navbar user={user} logout={logout} />
        </div>
    </header>
  )
}
