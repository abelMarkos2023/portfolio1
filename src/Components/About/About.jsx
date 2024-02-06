import React from 'react'

import styles from './About.module.css';
import { getImagePath } from '../../util';
const About = () => {
  return (
    <section className={styles.section} id='about'>
        <h2 className={styles.about}>About</h2>
        <div className={styles.container}>
        <img src={getImagePath('about/aboutImage.png')} alt="" className={styles.aboutAvatar}/>
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <img className={styles.aboutImage} src={getImagePath('about/cursorIcon.png')} alt="" />
                <div className={styles.desc}>
                    <h3>Frontent Develper</h3>
                    <p>I'm an  frontend devlpoer with Experience in building Responsive & Optomized websites</p>
                </div>
            </li>

            <li className={styles.listItem}>
                <img className={styles.aboutImage} src={getImagePath('about/serverIcon.png')} alt="" />
                <div className={styles.desc}>
                    <h3>Backend Develper</h3>
                    <p>I'm develop relaiable backend system and fast APIs</p>
                </div>
            </li>

            <li className={styles.listItem}>
                <img className={styles.aboutImage} src={getImagePath('about/uiIcon.png')} alt="" />
                <div className={styles.desc}>
                    <h3>UI/UX Design</h3>
                    <p>I design stuning looking logos and sketches for websites and mobile apps</p>
                </div>
            </li>
        </ul>
        </div>    

</section>
  )
}

export default About