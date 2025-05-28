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
        <title>My Blog Posts</title>
        <meta name="description" content="Blog posts by Deo" />
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
    props: { allPosts },
  };
}
