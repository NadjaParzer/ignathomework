import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './CSS.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink className={s.navlink} to="/pre-junior">PreJunior</NavLink>
            <NavLink className={s.navlink} to="/junior">Junior</NavLink>
            <div className={s.block}></div>

        </div>
    )
}

export default Header
