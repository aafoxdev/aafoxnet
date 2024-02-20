import styles from '@/css/post-header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'; // アイコンをインポート
import ConvertDate from '@/components/convert-date';

export default function PostHeader({title, subtitle, publish = '', update = ''}){
    console.log(title)
    return (
        <div className={styles.stack}>
            <p className={styles.subtitle}>{subtitle}</p>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.dateContainer}> {/* Flexbox コンテナ */}
           
            {publish && <div className={styles.publish}> 
            {<FontAwesomeIcon icon={faClock} size="la" color="var(--gray-25)"/>}
            <ConvertDate dateISO={publish} />
            </div>}
            {update && <div className={styles.update}>
            {<FontAwesomeIcon icon={faArrowRotateRight} size="la" color="var(--gray-25)"/>}
            <ConvertDate dateISO={update} />
            </div>}
            </div>
        </div>
    )
}