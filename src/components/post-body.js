import styles from '@/css/post-body.module.css'
//import styles from '@/css/prism.module.css'

export default function PostBody({children}){
    return (
        <div className={styles.stack}>
            {children}
        </div>
    )
}