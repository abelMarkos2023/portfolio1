import React from 'react'
import styles from './Hero.module.css';
import { getImagePath } from '../../util';
const Hero = () => {
  return (
    
        <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello I'm Abel</h1>
            <p className={styles.description}>I'm a full-stack developer with three years experience in  React.js,Vue.js, Node.js,MYSQL,MongooDB
             and PHP Laravel</p>
            <a className={styles.contactBtn} href="mail:myemail@gmail.com">Contact Me</a>
        </div>
        <div className={styles.imageContainer}>
        <img src={getImagePath('hero/heroImage.png')} alt="" className={styles.heroImg}/>

        </div>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    
        </section>

    
  )
}

export default Hero