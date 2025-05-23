type Post= {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  image?: string;
};

//import type { InferGetStaticPropsType } from "next"; (not used anymore, been replaced with post)
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Comment from "../../components/comment";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts, getPostBySlug } from "../../lib/getPost";
import markdownToHtml from "../../lib/markdownToHtml";
import Head from "next/head";

export default function PostPage({
                                   post,
                                 }: {
  post: Post;
}) {
  
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Head>
        <title>{post.title} | Deo's blog</title>
        <meta name="description" content={post.excerpt}/>
        <meta name="author" content="Deo Bibila"/>
        <meta property="og:title" content={post.title}/>
        <meta property="og:description" content={post.excerpt}/>
        <meta property="og:article" content="article" />
        <meta
            property="og:url"
            content={`https://www.deobibila.com/posts/${post.slug}`}
        />
        <meta
            property="og:image"
            content={

              post.image
              ? `https://www.deobibila.com/images/${post.image}.jpg`
              : `https://www.deobibila.com/images/default-og.jpg`
            }
        />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt}/>
        <meta name="twitter:image" content={
          post.image
              ? `https://www.deobibila.com/images/${post.image}`
              : `https://www.deobibila.com/images/default-og.jpg`
        }/>


        <link rel="canonical" href={`https://www.deobibila.com/posts/${post.slug}`}/>
      </Head>

      {router.isFallback ? (
          <div>Loading…</div>
      ) : (
          <div>
            <article>
              <header>
                <h1 className="text-4xl font-bold">{post.title}</h1>
                {post.excerpt ? (
                    <p className="mt-2 text-xl">{post.excerpt}</p>
                ) : null}
                <time className="flex mt-2 text-gray-400">
                  {distanceToNow(new Date(post.date))}
                </time>
              </header>

              <div
                  className="prose mt-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <Comment />
        </div>
      )}
    </Container>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "excerpt",
    "date",
    "content",
    "image",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
