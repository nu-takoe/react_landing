import React from 'react'
import './Content.scss'
import Menu from '../Header/Components/Menu'
import Info from './Components/Info'
import ContentScroll from './Components/ContentScroll'

export default function Content() {
    return (
        <div className='content-bg'>
            <div className='content-menu'>
                <Menu />
                <hr />
            </div>
            <Info />
            <ContentScroll />
        </div>
    )
}