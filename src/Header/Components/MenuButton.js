/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import '../Header.scss';
import Context from '../../context'

export default function MenuButton() {
    const { handleMenu } = useContext(Context)

    return (
        <div className='btn-body' >
            <div className='menu-btn'>
                <p>∞</p>
                <a href='#' onClick={handleMenu}>Menu</a>
            </div>
        </div>
    )
}