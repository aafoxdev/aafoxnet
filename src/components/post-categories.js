import styles from '@/css/post-categories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

export default function PostCategories({ categories }) {
  const filteredCategories = categories.filter(category => category.slug !== 'game' && category.slug !== 'website');
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className="sr-only">Categories</span>
      </h3>
      <ul className={styles.list}>
        {filteredCategories.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/blog/category/${slug}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
