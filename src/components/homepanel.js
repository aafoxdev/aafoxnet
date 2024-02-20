import styles from '@/css/homepanel.module.css';
import Link from 'next/link'
import Image from "next/legacy/image"
import home1 from '@/img/home1.png'
import home2 from '@/img/home2.png'
import home3 from '@/img/home3.png'
import home4 from '@/img/home4.png'

export default function HomePanel({ children, large = false }) {
  return (
    <div className={styles.mainArea}>
    <div className={styles.panelArea}>
      <ul className={styles.panelList}>
      <li>
            <div className={styles.flipContainer}>
              <div className={styles.flipper}>
                <div className={`${styles.front} ${styles.color1}`}>
                <div className={styles.content}>
                <figure  className={styles.img1}> <Image src={home1} alt="" layout="responsive" 
                  sizes="300px" 
                  priority placeholder='blur'/> 
                </figure>
                  <h2>WHOIS</h2>
                </div>
                </div>
                <div className={`${styles.back} ${styles.color1}`}>
                <Link href="/about" passHref>
                <div className={`${styles.clickable}`}>
                  <h2>自己紹介へ</h2>
                </div>
                </Link>
                </div>
              </div>
            </div>
          </li>
        <li>
        <div className={styles.flipContainer}>
              <div className={styles.flipper}>
                <div className={`${styles.front} ${styles.color2}`}>
                <div className={styles.content}>
                <figure  className={styles.img2}> <Image src={home2} alt="" layout="responsive" 
                  sizes="300px" 
                  priority placeholder='blur'/> 
                </figure>
                  <h2>さわる</h2>
                </div>
                </div>
                <div className={`${styles.back} ${styles.color2}`}>
                <Link href="/work" passHref>
                <div className={`${styles.clickable}`}>
                  <h2>ワークへ</h2>
                </div>
                </Link>
                </div>
              </div>
            </div>
        </li>
        <li>
        <div className={styles.flipContainer}>
              <div className={styles.flipper}>
                <div className={`${styles.front} ${styles.color3}`}>
                <div className={styles.content}>
                <figure  className={styles.img3}> <Image src={home3} alt="" layout="responsive" 
                  sizes="300px" 
                  priority placeholder='blur'/> 
                </figure>
                  <h2>みる</h2>
                </div>
                </div>
                <div className={`${styles.back} ${styles.color3}`}>
                <Link href="/gallery" passHref>
                <div className={`${styles.clickable}`}>
                  <h2>Artへ</h2>
                  </div>
                </Link>
                </div>
              </div>
            </div>
        </li>
        <li>
        <div className={styles.flipContainer}>
              <div className={styles.flipper}>
                <div className={`${styles.front} ${styles.color4}`}>
                <div className={styles.content}>
                <figure  className={styles.img4}> <Image src={home4} alt="" layout="responsive" 
                  sizes="300px" 
                  priority placeholder='blur'/> 
                </figure>
                  <h2>よむ</h2>
                  </div>
                </div>
                <div className={`${styles.back} ${styles.color4}`}>
                <Link href="/blog" passHref>
                <div className={`${styles.clickable}`}>
                  <h2>ブログへ</h2>
                  </div>
                </Link>
                </div>
              </div>
            </div>
        </li>
      </ul>
    </div>
    </div>
  )
}