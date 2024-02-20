import styles from '@/css/contact.module.css'
import Social from './social'

export default function Contact(){
    return(
        <div className={styles.stack}>
            <h3 className={styles.heading}>SNS</h3>
            <Social iconSize="30px" />
            
        </div>
    )
}