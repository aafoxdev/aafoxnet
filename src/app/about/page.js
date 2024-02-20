import Hero from '../../components/hero'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Contact from '../../components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar} from '../../components/two-column'
import Image from "next/legacy/image"
import eyecatch from '../../img/about.jpg'
import TwitterTimeline from '@/components/twittertimeline';
// サイトに関する情報
//import { siteMeta } from '@lib/constants'
//const { siteTitle, siteUrl } = siteMeta

// ベースのメタデータ
import { openGraphMetadata, twitterMetadata } from '@/lib/baseMetadata'

export default function About() {
    return (
    <Container>
   
    <Hero title="WHOIS" subtitle="About Athenai" />
    <figure>
      <Image src={eyecatch} alt="" layout="responsive" sizes="(min-width: 1125px) 1152px, 100vw"
      priority placeholder="blur"/>
    </figure>
    <TwoColumn>
    <TwoColumnMain>
      <PostBody>
      <h2>Athenaiとは?</h2>
      <p>
      Athenaiは、システム開発が得意な自称エンジニアです。フロントエンドからバックエンドまで
      開発できるフルスタックエンジニアを目指して現在勉強中です。
      </p>
      <h2>技術スタック</h2>
      <p>
      基本的なHTMLやCSSの記述や、PHPを用いたバックエンド開発が得意です。ただし、PHPのフレーム
      ワークを扱っての開発は得意ではありません。2024年の1月からReactを勉強し、2月からNextJSを
      用いたシステム開発の方法を学んでいます。あと、インフラの構築も好きです。最近ですと、Dockerを
      用いてNginx、NextJS、MySQL、PHPMyAdminで構成された仮想サーバーを立ち上げるための
      コードを作ったりしました。
      https://github.com/aafoxdev/nginx-nextjs-mysql-phpmyadmin
      </p>
      <h2>開発したサイトについて</h2>
      <p>
      aafox.netをはじめとしていろいろなサイトを開発しました。制作物の例に関してはworkサイトをご覧くささい。
      </p>
      <h2>趣味について</h2>
      <p>
        趣味はイラスト制作とWeb開発です。イラストに関してはX等でも投稿していますので、フォローしてくれたら
        うれしいです。
      </p>
      </PostBody>
    </TwoColumnMain>
    <TwoColumnSidebar>
    <Contact />
    <TwitterTimeline />
    </TwoColumnSidebar>
    </TwoColumn>
    </Container>
    )
}


// メタデータの定義
const pageTitle = 'アバウト'
const pageDesc = 'About development activities'
// メタデータの出力
export const metadata = {
  title: pageTitle,
  description: pageDesc,
}