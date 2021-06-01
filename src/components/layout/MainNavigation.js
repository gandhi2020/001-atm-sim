import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header} >
            <div className={classes.logo}>ATM Tools</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to="/home" activeClassName={classes.active}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/atm" activeClassName={classes.active}>
                            ATM
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
