import React from "react";
import { useState } from "react";
import css from './UserProfile.module.css'
import Avatar from '../../../assets/avatar.svg'
import arrowUp from '../../../assets/arrow-up.svg'
import arrowDown from '../../../assets/arrow-down.svg'
import rectangle from '../../../assets/rectangle.svg'

export function UserProfile()  {
    const [isMenuShow, setMenuShow] = useState(false)

    return (
        <div className={css.user} onClick={() => setMenuShow(!isMenuShow)}>
            <img className={css.avatar} src={Avatar} alt='avatar' />
            <button className={css.button} type="button">
                {isMenuShow ? <img src={arrowUp} alt="arrwUp"/> : <img src={arrowDown} alt="arrwDn"/>}
            </button>
            
            {isMenuShow && (
                <div className={css.menu}>
                    <div className={css.rectangle}>
                        <img src={rectangle} alt="rectangle"/>
                    </div>
                    <div className={css.menuLink}>Profile</div>
                    <div className={css.menuLink}>Log Out</div>
                </div>
            )}
        </div>
    )
}
