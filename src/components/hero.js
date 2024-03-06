import styles from '@/css/hero.module.css'
import Image from "next/legacy/image"
import cube from '@/img/sakura.png'
export default function Hero({title, subtitle, imageOn = false, buttonOn = false}) {
    return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        {buttonOn && (
          <a href="https://work.aafox.net" className={`${styles.btn} ${styles.bgleft}`} target="_blank" rel="noopener noreferrer" ><span>リンク集はこちらから</span></a>
        )
        }
      </div>
        {imageOn && (
        <figure  className={styles.image}> <Image src={cube} alt="" layout="responsive" 
        sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" 
        priority placeholder='blur'/> </figure>
        )}
      
    </div>
    )
} 