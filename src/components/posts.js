import styles from '@/css/posts.module.css'
import Link from 'next/link'
import Image from "next/legacy/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import ConvertDate from '@/components/convert-date';
export default function Posts({ posts }) {
  console.log(posts)
  return (
    
    <ul className={styles.gridList}>
      {posts.map(({ title, slug, eyecatch, publishDate }) => (
        <li key={slug}>
          <Link href={`/blog/${slug}`}>
            <dl>
            <p className={styles.gridLabel}>
              {slug}
            </p>
            <figure className={styles.figureContainer}>
                <Image
                  className={styles.img}
                  src={eyecatch.url}
                  alt=""
                  layout="fill"
                  
                  placeholder="blur"
                  blurDataURL={eyecatch.blurDataURL}
                />
              </figure>
              <dt>{title}</dt>
              <div className={styles.time}><FontAwesomeIcon icon={faClock} size="la" color="var(--gray-25)"/>
              <ConvertDate dateISO={publishDate} /></div>
            </dl>
           
          </Link>
        </li>
      ))}
    </ul>
  );
}