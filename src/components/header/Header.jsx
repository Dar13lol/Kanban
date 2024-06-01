import React from 'react'
import css from './Header.module.css'
import { UserProfile } from '../header/user/UserProfile'

function Header() {
    return (
        <>
            <header className={css.header}>
                <h1 className={css.title}>Awesome Kanban Board</h1>
                <UserProfile />
            </header>
        </>
    )
}

export default Header