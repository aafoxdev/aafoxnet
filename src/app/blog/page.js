//microCMSに接続するための処理が書いているのでimport
import { getAllPosts } from '@/lib/api'
//Postsで取得したデータを整形して表示する
import Posts from '@/components/posts'
//サイトのヒーローやデザイン等の設定用
import Hero from '@/components/hero'
import Container from '@/components/container'
// サイトに関するメタデータ
import { siteMeta } from '@/lib/constants'
const { siteTitle, siteUrl } = siteMeta
// 共有用のメタデータ
import { openGraphMetadata, twitterMetadata } from '@/lib/baseMetadata'
import PostHeader from '@/components/post-header'
// ローカルの代替アイキャッチ画像に関する設定
import { eyecatchLocal } from '@/lib/constants'
import { getPlaiceholder } from 'plaiceholder'


//export default async function Blog() {
//  // CMSからデータを取得する
//  const posts = await getAllPosts()
//  for (const post of posts) {
//    //eyecatchが設定されていなければデフォルトの画像を使用する
//    if (!post.hasOwnProperty('eyecatch')) {
//      post.eyecatch = eyecatchLocal
//    }
//    //読み出した画像をブラー画像として使えるようにする
//    const { base64 } = await getPlaiceholder(post.eyecatch.url)
//    post.eyecatch.blurDataURL = base64
//  }
//  //console.log(posts.contents)
//    return (
//    <Container>
//      <Hero title="BLOG" subtitle="Recent Posts" />
//      <Posts posts={posts} />
//    </Container>
//    )
//}
export default async function Blog() {
  // CMSからデータを取得する
  const allPosts = await getAllPosts();
  
  // slugがwebsite、game以外のカテゴリーに属する投稿のみをフィルタリング
  const filteredPosts = allPosts.filter(post =>
    post.categories.some(category => category.slug !== 'website' && category.slug !== 'game' && category.slug !== 'about')
  );

  // eyecatchの処理
  for (const post of filteredPosts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  // ページコンテンツのレンダリング
  return (
    <Container>
      <Hero title="BLOG" subtitle="Recent Posts" />
      <Posts posts={filteredPosts} />
    </Container>
  );
}

// メタデータの定義
const pageTitle = 'ブログ'
const pageDesc = 'ブログの記事一覧'
const ogpTitle = `${pageTitle} | ${siteTitle}`
const ogpUrl = new URL('/blog', siteUrl).toString()
// メタデータの出力
export const metadata = {
  title: pageTitle,
  description: pageDesc,

  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    description: pageDesc,
    url: ogpUrl,
  },

  twitter: {
    ...twitterMetadata,
    title: ogpTitle,
    description: pageDesc,
  },
}