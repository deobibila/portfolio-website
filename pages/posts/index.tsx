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
          <meta property="og:image" content="https://www.deobibila.com/images/default-og.jpg"/>
          <meta property="og:image:alt" content="A preview of Deo's blog homepage"/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="630"/>

          {/* Twitter Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="Deo's Blog"/>
          <meta name="twitter:description" content="Blog posts by Deo Bibila on tech & research."/>
          <meta name="twitter:image" content="https://www.deobibila.com/images/default-og.jpg"/>

          <link rel="canonical" href="https://www.deobibila.com/posts"/>
        </Head>

        <div className="mb-10 p-4 border-l-4 border-yellow-400 bg-yellow-50 rounded">
          <h2 className="text-lg font-semibold text-yellow-800">🛠️ In the Works</h2>
          <p className="text-sm text-yellow-700 mt-1 italic">
            Writing: <span className="font-medium">"Latency-Aware Load Balancer for Microservices Using RL"</span> - In Review
          </p>

          <details className="mt-3">
            <summary className="cursor-pointer text-sm text-yellow-800 underline underline-offset-2 hover:text-yellow-900">
              sneak peek
            </summary>
            <div className="mt-2 text-sm text-yellow-700 leading-relaxed">
              In this work, I  propose a reinforcement-learning-based load balancer that dynamically allocates requests to microservice instances based on observed latency and traffic patterns. <br/><br/>
            </div>
          </details>
        </div>


        <div className="mb-10 p-4 border-l-4 border-yellow-400 bg-yellow-50 rounded">
          <h2 className="text-lg font-semibold text-yellow-800">🛠️ In the Works</h2>
          <p className="text-sm text-yellow-700 mt-1 italic">
            Writing: <span className="font-medium">"Adaptive ML-Based Caching for Content Delivery"</span> - coming soon
          </p>

          <details className="mt-3">
            <summary className="cursor-pointer text-sm text-yellow-800 underline underline-offset-2 hover:text-yellow-900">
              sneak peek
            </summary>
            <div className="mt-2 text-sm text-yellow-700 leading-relaxed">
              I present an adaptive machine learning caching policy that predicts content popularity using historical access trends and dynamically adjusts cache entries.
            </div>
          </details>
        </div>


        <h1 className="text-2xl font-bold mb-6">All Blog Posts</h1>

        {allPosts.length ? (
            allPosts.map((post) => (
                <article key={post.slug} className="mb-10">
                  <Link
                      as={`/posts/${post.slug}`}
                      href="/posts/[slug]"
                      className="text-lg leading-6 font-bold"
                  >
                    <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                      {post.title}
                    </h2>
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
