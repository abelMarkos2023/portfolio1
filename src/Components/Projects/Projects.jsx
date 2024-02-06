import React from 'react'
import styles from './Projects.module.css';
import projects from '../../data/projects.json'
import { getImagePath } from '../../util';
const Projects = () => {
  return (
    <section id='projects' className={styles.projects}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectsList}>
            {
                projects.map(p => (
                    <div key={p.demo} className={styles.project}>
                        <img src={getImagePath(p.imageSrc)} className={styles.img} alt="" />
                        <div className={styles.projectDetail}>
                            
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <ul>
                            {
                                p.skills.map(skil => (
                                    <li key={skil}>{skil}</li>
                                ))
                            }
                        </ul>
                        <ul className={styles.action}>
                            <li className={styles.actItem}>
                                <a href={p.demo}>Demo</a>
                            </li>
                            <li className={styles.actItem}>
                                <a href={p.source}>Source</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Projects