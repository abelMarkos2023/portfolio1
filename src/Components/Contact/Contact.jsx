import React from 'react'
import styles from './Contact.module.css';
import { getImagePath } from '../../util';


const Contact = () => {
  return (
    <footer className={styles.contact}>
        <div className={styles.left}>
            <h2>Contact</h2>
            <p>Feel Free to Reach out</p>
        </div>
        <ul className={styles.right}>
            <li className={styles.item}>

            <img src={getImagePath('contact/emailIcon.png')} alt="" />
            <span>abelmarkos2023@gmail.com</span>
            </li>
            <li className={styles.item}>

            <img src={getImagePath('contact/linkedinIcon.png')} alt="" />
            <span>https://linkedin.com/abelMarkos</span>
            </li>
            <li className={styles.item}>

            <img src={getImagePath('contact/githubIcon.png')} alt="" />
            <span>https://github.com/abelmarkos2023</span>
            </li>
        </ul>
    </footer>
  )
}

export default Contact