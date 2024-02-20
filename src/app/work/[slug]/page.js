import { getPostBySlug, getAllSlugs, getAllCategories } from '@/lib/api'
//import { extractText } from '@/lib/extract-text'
//import { prevNextPost } from '@/lib/prev-next-post'
import Container from '@/components/container'
import PostHeader from '@/components/post-header'
import PostBody from '@/components/post-body'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/components/two-column'
import { format } from 'date-fns'
import ConvertBody from '@/components/convert-body'
import PostCategories from '@/components/work-post-categories'
//import Pagination from '@/components/pagination'
import Image from 'next/legacy/image'
import { getPlaiceholder } from 'plaiceholder'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from '@/lib/constants'

// サイトに関する情報
import { siteMeta } from '@/lib/constants'
const { siteTitle, siteUrl } = siteMeta

// ベースのメタデータ
import { openGraphMetadata, twitterMetadata } from '@/lib/baseMetadata'

// Twitterの情報取得
import TwitterTimeline from '@/components/twittertimeline';
import Contact from '@/components/contact'

export default async function Post({ params }) {
    const slug = params.slug
    const post = await getPostBySlug(slug)
    const categories = await getAllCategories()
    const { title, publishDate: publish, content, updatedAt } = post
    const eyecatch = post.eyecatch ?? eyecatchLocal
    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64
    // Format updatedAt date for display
    // const formattedUpdatedAt = format(new Date(updatedAt), 'PPP'); // Format date as needed
    return(
        <Container>
            <PostHeader title={title} subtitle="Work Article" publish={publish} update={updatedAt}/>
            {/*<div>Updated on: {formattedUpdatedAt}</div>  */}
            <figure>
            <Image
              key={eyecatch.url}
              src={eyecatch.url}
              alt=""
              layout="responsive"
              width={eyecatch.width}
              height={eyecatch.height}
              sizes="(min-width: 1152px) 1152px, 100vw"
              priority
              placeholder="blur"
              blurDataURL={eyecatch.blurDataURL}
            />
            </figure>
            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>
                        <ConvertBody contentHTML={content} />
                        
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

export const dynamicParams = false
export async function generateStaticParams() {
  const allSlugs = await getAllSlugs()

  return allSlugs.map(({ slug }) => {
    return { slug: slug }
  })
}


// メタデータ
export async function generateMetadata({ params }) {
    const slug = params.slug
    const post = await getPostBySlug(slug)
    const { title: pageTitle, publishDate: publish, content, categories } = post
  
    //const pageDesc = extractText(content)
    const eyecatch = post.eyecatch ?? eyecatchLocal
  
    const ogpTitle = `${pageTitle} | ${siteTitle}`
    const ogpUrl = new URL(`/work/${slug}`, siteUrl).toString()
  
    const metadata = {
      title: pageTitle,
      //description: pageDesc,
  
      openGraph: {
        ...openGraphMetadata,
        title: ogpTitle,
        //description: pageDesc,
        url: ogpUrl,
        images: [
          {
            url: eyecatch.url,
            width: eyecatch.width,
            height: eyecatch.height,
          },
        ],
      },
      twitter: {
        ...twitterMetadata,
        title: ogpTitle,
        //description: pageDesc,
        images: [eyecatch.url],
      },
    }
  
    return metadata
  }
  