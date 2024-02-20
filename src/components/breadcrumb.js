import { Link, useNavigation } from "next/navigation";
import styles from "@/css/BreadCrumb.module.css";
import React from 'react';

export const BreadCrumb = () => {
  // `useNavigation` フックを使用してナビゲーションの状態を取得
  const navigation = useNavigation();

  // 現在のパスを取得し、`/` で分割してパスの配列を生成
  const paths = decodeURI(navigation.current.pathname).substring(1).split("/");

  // リンク先のアドレスを生成
  const roots = paths.reduce((acc, cur, i) => {
    acc.push(`${acc[i]}/${cur}`);
    return acc;
  }, [""]);

  return (
    <div className={styles.container}>
      {/* トップページへのリンク */}
      <Link href="/">
        <a className={styles.link}>Top</a>
      </Link>
      {paths.map((path, i) => (
        <React.Fragment key={i}>
          {/* サブページへのリンク */}
          <span>{">"}</span>
          <Link href={roots[i + 1]}>
            <a className={styles.link}>{path}</a>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};
