import {createClient} from 'microcms-js-sdk'

export const client = createClient(
    {
        serviceDomain: process.env.SERVICE_DOMAIN,
        apiKey: process.env.API_KEY,
        
    }
)

export async function getPostBySlug(slug) {
    try {
      const post = await client.get({
        endpoint: 'blogs',
        queries: { filters: `slug[equals]${slug}` },
      })
      //console.log("ここから確認")
      //console.log(post); // デバッグ：取得した投稿データをログに出力
      return post.contents[0]
    } catch (err) {
      console.log('~~ getPostBySlug ~~')
      console.log(err)
    }
}

export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug', orders: '-publishDate', limit: limit },
    })
    return slugs.contents
  } catch (err) {
    console.log('~~ getAllSlugs ~~')
    console.log(err)
  }
}

//export async function getPostBySlug(slug) {
//  try {
//    const post = await client.get({
//      endpoint: 'blogs',
//      queries: {
//        filters: `slug[equals]${slug}`,
//        fields: 'title,slug,publishDate,content,categories,eyecatch' // ここにeyecatchを含める
//      },
//    })
//    console.log("ここから確認")
//    console.log(post); // デバッグ：取得した投稿データをログに出力
//    return post.contents[0] // contents配列の最初の要素を返す
//  } catch (err) {
//    console.log('~~ getPostBySlug ~~')
//    console.log(err)
//  }
//}

export async function getAllPosts(limit = 100) {
    try {
      const posts = await client.get({
        endpoint: 'blogs',
        queries: {
          fields: 'title,slug,eyecatch,categories,publishDate',
          orders: '-publishDate',
          limit: limit,
        },
      })
      // APIレスポンスの全体をログに記録
      //console.log("API Response:", posts);
      //console.log("動作確認222");
      // 各投稿のcategoriesプロパティの内容を詳細にログに記録
      //posts.contents.forEach((post, index) => {
      //  console.log(`Post #${index + 1} title:`, post.title);
      //  if (post.categories && Array.isArray(post.categories)) {
      //    post.categories.forEach((category, catIndex) => {
      //      console.log(`  Category #${catIndex + 1}:`, category);
      //    });
      //  }
      //});

      // 各投稿のeyecatchプロパティを詳細にログに記録
      //posts.contents.forEach((post, index) => {
      //  console.log(`Post #${index + 1} eyecatch:`, post.eyecatch);
      //});
      //console.log(posts)
      return posts.contents
    } catch (err) {
      console.log('~~ getAllPosts ~~')
      console.log(err)
    }
  }
  
  export async function getAllCategories(limit = 100) {
    try {
      const posts = await client.get({
        endpoint: 'categories',
        queries: {
          fields: 'id,name,slug',
          orders: '-publishDate',
          limit: limit,
        },
      })
      // APIレスポンスの全体をログに記録
      //console.log("API Response:", posts);

      // 各投稿のeyecatchプロパティを詳細にログに記録
      //posts.contents.forEach((post, index) => {
      //  console.log(`Post #${index + 1} eyecatch:`, post.eyecatch);
      //});
      //console.log(posts)
      return posts.contents
    } catch (err) {
      console.log('~~ getAllPosts ~~')
      console.log(err)
    }
  }

  export async function getAllPostsByCategory(catID, limit = 100) {
    try {
      //console.log('動作確認')
      //console.log(catID)
      const posts = await client.get({
        endpoint: 'blogs',
        queries: {
          filters: `categories[contains]${catID}`,
          fields: 'title,slug,eyecatch',
          orders: '-publishDate',
          limit: limit,
        },
      })
      //console.log('中身の確認')
      //console.log(posts)
      return posts.contents
    } catch (err) {
      console.log('~~ getAllPostsByCategory ~~')
      console.log(err)
    }
  }

  export async function getAllWebPosts(limit = 100) {
    try {
      const posts = await client.get({
        endpoint: 'blogs',
        queries: {
          filters: `categories[contains]website`,
          fields: 'title,slug,eyecatch',
          orders: '-publishDate',
          limit: limit,
        },
      })
      //console.log("API Response:", posts);
      return posts.contents
    } catch (err) {
      console.log('~~ getAllPosts ~~')
      console.log(err)
    }
  }

  export async function getAllGamePosts(limit = 100) {
    try {
      const posts = await client.get({
        endpoint: 'blogs',
        queries: {
          filters: `categories[contains]game`,
          fields: 'title,slug,eyecatch',
          orders: '-publishDate',
          limit: limit,
        },
      })
      //console.log("API Response:", posts);
      return posts.contents
    } catch (err) {
      console.log('~~ getAllPosts ~~')
      console.log(err)
    }
  }