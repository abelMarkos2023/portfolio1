import React from 'react'

import styles from './Experience.module.css';

import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImagePath } from '../../util';
const Experience = () => {
return (
<section className={styles.container} id='experience'>
<h2 className={styles.title}>experience</h2>
<div className={styles.content}>

<div className={styles.skills}>
{
skills.map(skil => (
<div className={styles.skill} key={skil.title}>
<div className={styles.skillImgContainer}>
    <img className={styles.img} src={getImagePath(skil.imageSrc)} alt="" />
</div>
<p className={styles.skillTitle}>{skil.title}</p>
</div>
))
}
</div>
<ul className={styles.history}>
{
history.map(his => (
<li className={styles.historyItem} key={his.endDate}>
<div className={styles.historyImgContainer}>
    <img className={styles.historyImg} src={getImagePath(his.imageSrc)} alt="" />
</div>
<div className={styles.historyDesc}>
<h3 className={styles.historyRole}>
    {`${his.role}  ${his.organisation}`}
</h3>
<p className={styles.historyDate}>{` ${his.startDate}  ${his.endDate}`}</p>
<ul className={styles.historyList}>{
    his.experiences.map(exp => (
        <li className={styles.historyListItem} key={exp}>{exp}</li>
    ))
    }
    </ul>
</div>
</li>
))
}
</ul>
</div>
</section>
)
}

export default Experience