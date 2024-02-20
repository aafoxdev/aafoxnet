import Link from 'next/link'
import styles from '@/css/logo.module.css'
import Image from "next/legacy/image"
import logo from '@/img/logo.png'

export default function Logo({boxOn = false}) {
    return (
        <Link href="/" >
            <div className={boxOn ? styles.box : styles.basic}>
                {boxOn ? 
                <Image src={logo} alt="" priority placeholder="blur"/> : "Athenai"}
            </div>
        </Link>
    )
}