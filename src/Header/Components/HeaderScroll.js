import React from 'react'
import '../Header.scss'
import AnimArrow from './AnimArrow'

export default function HeaderScroll() {
    return (
        <div className='header-scroll'>
            <p>scroll down to see more</p>
            <AnimArrow />
        </div>
    )
}