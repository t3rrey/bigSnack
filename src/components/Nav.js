import React from 'react'
import '../style/Nav.scss'

export const Nav = () => {
    return(
        <div className='container'>
            <nav className='mainNav'>
                <ul>
                    <li> HOME</li>
                    <li>MENU</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    )
}