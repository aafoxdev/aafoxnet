"use client";
import Logo from "./logo";
import styles from "@/css/footer.module.css";
import Container from "./container";
import Social from "./social";

//export default function Footer() {
//    return (
//    <footer className={styles.wrapper}>
//    <Container>
//        <div className={styles.flexContainer}>
//        <Logo />
//        <Social />
//        </div>
//    </Container>
//    </footer>
//    )
//}
export default function Footer() {
  // ページの先頭にスクロールする関数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // スムーズなスクロール
    });
  };
  return (
    <footer className={styles.footer}>
      <svg
        viewBox="0 0 120 28"
        className={styles.svgContainer}
        onClick={scrollToTop}
      >
        <defs>
          <mask id="xxx">
            <circle cx="7" cy="12" r="40" fill="#fff" />
          </mask>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 13 -9"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
          <path
            id="wave"
            d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
          />
        </defs>
        <use
          id="wave3"
          className={`${styles.wave} ${styles.wave3}`}
          xlinkHref="#wave"
          x="0"
          y="-2"
        ></use>
        <use
          id="wave2"
          className={`${styles.wave} ${styles.wave2}`}
          xlinkHref="#wave"
          x="10"
          y="0"
        ></use>
        <g className={styles.topball}>
          <circle
            className={styles.ball}
            cx="110"
            cy="8"
            r="4"
            fill="red"
            onClick={scrollToTop}
          />
          <g className={styles.arrow}>
            <polyline points="108,8 110,6 112,8" fill="none" />
            <polyline points="110,6 110,10.5" fill="none" />
          </g>
        </g>
        <g className={styles.gooeff}>
          <circle className={styles.drop} cx="20" cy="2" r="1.8" />
          <circle className={styles.drop} cx="25" cy="2.5" r="1.5" />
          <circle className={styles.drop} cx="16" cy="2.8" r="1.2" />
          <use
            id="wave1"
            className={styles.wave}
            xlinkHref="#wave"
            x="0"
            y="1"
          />
        </g>
      </svg>
      <div className={styles.flexContainer}>
        <Logo />
        <Social />
      </div>
    </footer>
  );
}
