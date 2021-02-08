import React from 'react'
import Nav from './Components/Nav'
import HeaderScroll from './Components/HeaderScroll'
import './Header.scss'

export default function Header() {
    return (
        <div className="header-bg">
            <Nav />
            <HeaderScroll />
        </div>
    )
}