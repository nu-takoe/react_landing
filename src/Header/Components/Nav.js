import React from "react";
import Menu from './Menu'
import MenuButton from './MenuButton'
import '../Header.scss'
import Context from "../../context";

export default function Nav() {
    const [isOpen, toggleMenu] = React.useState(false);

    function handleMenu(e) {
        e.preventDefault();
        toggleMenu(!isOpen);
    }
    return (
        <Context.Provider value={{ handleMenu }}>
            <div className="header-menu">
                <div className='burger-menu'>
                    <MenuButton />
                    <Menu isOpen={isOpen} />
                </div>
                <Menu />
                <hr />
            </div>
        </Context.Provider>
    )
}