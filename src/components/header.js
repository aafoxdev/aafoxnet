import Logo from './logo'
import Nav from './nav'
import Container from './container'
import styles from '@/css/header.module.css'
//export default function Header() {
//    return (
//    <>
//    <header>
//      <Container large>
//        <div className={styles.flexContainer}>
//          <Logo boxOn />
//          <Nav />
//        </div>
//      </Container>
//    </header>
//    </>
//    )
//} 

export default function Header() {
  return (
  <>
  <header className={styles.header}>
      <div className={styles.headerInner}>
        <Logo boxOn />
        <Nav />
      </div>
  </header>
  </>
  )
} 