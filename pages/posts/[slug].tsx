import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import { getAllPosts, getPostBySlug } from "../../lib/getPost";
import markdownToHtml from "../../lib/markdownToHtml";
import Head from "next/head";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  image?: string;
};

export default function PostPage({ post }: { post: Post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
      <Container>
        <Head>
          <title>{`${post.title || "Untitled"} | Deo's Blog`}</title>
          <meta name="description" content={post.excerpt} />
          <meta name="author" content="Deo Bibila" />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt} />
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
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.excerpt} />
          <meta
              name="twitter:image"
              content={
                post.image
                    ? `https://www.deobibila.com/images/${post.image}.jpg`
                    : `https://www.deobibila.com/images/default-og.jpg`
              }
          />
          <link
              rel="canonical"
              href={`https://www.deobibila.com/posts/${post.slug}`}
          />
        </Head>

        {router.isFallback ? (
            <div>Loading…</div>
        ) : (
            <div>
              <article className="max-w-3xl mx-auto mt-12">
                <header>
                  {/* Title */}
                  <h1
                      className="text-4xl font-bold"
                      style={{
                        color: "#242424",
                        fontFamily:
                            'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
                      }}
                  >
                    {post.title}
                  </h1>

                  {/* Excerpt */}
                  {post.excerpt ? (
                      <p
                          className="mt-2 text-xl"
                          style={{
                            color: "#6B6B6B",
                            fontFamily:
                                'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
                          }}
                      >
                        {post.excerpt}
                      </p>
                  ) : null}

                  {/* Date */}
                  <time
                      dateTime={post.date}
                      className="block mt-2 text-sm"
                      style={{
                        color: "#6B6B6B",
                        fontFamily:
                            'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
                      }}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>

                  {/* Divider */}
                  <hr className="border-gray-200 my-6" />
                </header>

                {/* Content */}
                <div
                    className="prose prose-lg mt-10"
                    style={{
                      fontFamily:
                          'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
                    }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>
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
        params: { slug },
      };
    }),
    fallback: false,
  };
}
