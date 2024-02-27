import React from 'react'
import styles from './rightBar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'
export default function RightBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.jpg" alt="astronaut" fill/>
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Available now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>
            Takes 4 minute to learn
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.jpg" alt="astronaut" fill/>
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Available now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>
            Takes 4 minute to learn
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            watch
          </button>
        </div>
      </div>
    </div>
  )
}
