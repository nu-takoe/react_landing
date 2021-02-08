import React from 'react'
import AnimArrow from '../../Header/Components/AnimArrow'
import '../Content.scss'

export default function ContentScroll() {
    return (
        <div className='content-scroll'>
            <p>keep scrolling, there is still more to come.</p>
            <AnimArrow />
        </div>
    )
}