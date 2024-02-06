import React, { useState } from 'react'
import styles from './Navbar.module.css'

import {getImagePath} from '../../util.js'
const Navbar = () => {
    const handleMenu = () => {
        setOpen(!open)
    }
    const [open,setOpen] = useState(false)
  return (
    <nav className={styles.navbar}>
         
        <a className={styles.title} href="#">Portfolio</a>
        {!open && <img onClick = {handleMenu } src={getImagePath('nav/menuIcon.png')} alt="" className={styles.menuIcon}/>}
        {open && <img onClick = {handleMenu} src={getImagePath('nav/closeIcon.png')} alt="" className={styles.menuIcon}/>}
        <div className={styles.menu}>
        
            <ul onClick={handleMenu} className={`${styles.menuItems} ${open?styles.show:styles.hide}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar