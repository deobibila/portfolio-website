import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts } from "../../lib/getPost";
import { generateRSSFeed} from "../../scripts/generate-rss";
import Head from "next/head";

export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Head>
        <title>Deo's Blog</title>
        <meta name="description" content="Blog posts by Deo"/>
        <meta name="author" content="Deo Bibila"/>

        <meta property="og:title" content="Deo's Blog"/>
        <meta property="og:description" content="Blog posts by Deo Bibila on tech & research."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.deobibila.com/posts"/>
        <meta property="og:image" content="https://www.deobibila.com/images/blog-preview.jpg"/>
        <meta property="og:image:alt" content="A preview of Deo's blog homepage"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Deo's Blog"/>
        <meta name="twitter:description" content="Blog posts by Deo Bibila on tech, creativity, and life."/>
        <meta name="twitter:image" content="https://www.deobibila.com/images/default-og.jpg"/>

        <link rel="canonical" href="https://www.deobibila.com/posts"/>
      </Head>
      {allPosts.length ? (
          allPosts.map((post) => (
              <article key={post.slug} className="mb-10">
                <Link
                    as={`/posts/${post.slug}`}
                    href="/posts/[slug]"
                    className="text-lg leading-6 font-bold"
                >
                  {post.title}
                </Link>
                <p>{post.excerpt}</p>
                <div className="text-gray-400">
                  <time>
                    {new Date(post.date).toLocaleString('en-US', {
                      dateStyle: 'long'
                    })}
                  </time>
                </div>
              </article>
          ))
      ) : (
          <p>No blog posted yet :/</p>
      )}
    </Container>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "excerpt", "date", "image"]);

  await generateRSSFeed();

  return {
    props: {allPosts},
  };
}
