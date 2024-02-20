import styles from '@/css/work-posts.module.css'
import Link from 'next/link'
import Image from "next/legacy/image";

export default function Posts({ posts , postname}) {
    console.log(postname)
  return (
    <div className={styles.workContainer}>
      <h2>{postname}</h2>
      <ul className={styles.itemList}>
      
      {posts.map(({ title, slug, eyecatch }) => (
        <li  key={slug}>
          <Link href={`/work/${slug}`}>

            <figure className={styles.figureContainer}>
              <Image
                src={eyecatch.url}
                alt=""
                layout="fill"
                objectFit="cover"
                sizes="300px"
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
              />
            </figure>
            <h2>{title}</h2>

          </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}