import React from "react";
import '../Header.scss'
import NavLink from './NavLink'

export default function Menu(props) {
    const classes = [];

    if (props.isOpen) {
        classes.push('open')
    }

    const menu = [
        "home",
        "about me",
        "portfolio",
        "contact",
    ];

    return (
        <ul className={classes.join(' ')}>
            {menu.map((mn, index) => {
                return (
                    <NavLink mn={mn} key={index} />
                )
            })}
        </ul>
    )
}