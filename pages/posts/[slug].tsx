import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import { getAllPosts, getPostBySlug } from "../../lib/getPost";
import markdownToHtml from "../../lib/markdownToHtml";
import { IoShareOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

import mermaid from "mermaid";
let mermaidInitialized = false;


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

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    // Find mermaid code fences produced by markdown renderer
    const root = contentRef.current;
    if (!root) return;

    const blocks = root.querySelectorAll("pre > code.language-mermaid");

    if (!blocks.length) return; //no mermaid on this page, do nada

    if (!mermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
      });
      mermaidInitialized = true;
    }

    // Convert fenced code blocks into <div class="mermaid">...</div>
    blocks.forEach((codeEl) => {
      const pre = codeEl.parentElement;
      if (!pre) return;

      const container = document.createElement("div");
      container.className = "mermaid";
      container.textContent = codeEl.textContent || "";

      pre.replaceWith(container);
    });

    // Render my diagrams
    (async () => {
      const diagrams = Array.from(root.querySelectorAll<HTMLElement>(".mermaid"));
      if (!diagrams.length) return;
      try {
        await mermaid.run({ nodes: diagrams });
      } catch (e) {
        console.error("Mermaid render failed:", e);
      }
    })();
  }, [post?.slug]);

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
      <Container>
        <Head>
          <title>{`${post.title || "Untitled"} – Deo Bibila`}</title>
          <meta name="description" content={post.excerpt} />
          <meta name="author" content="Deo Bibila" />

          <meta property="og:title" content={`${post.title} – Deo Bibila`} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:type" content="article" />
          <meta property="article:author" content="Deo Bibila" />
          <meta property="article:published_time" content={post.date} />
          <meta
              property="og:url"
              content={`https://deobibila.com/posts/${post.slug}`}
          />
          <meta
              property="og:image"
              content={
                post.image
                    ? `https://deobibila.com/images/${post.image}.jpg`
                    : `https://deobibila.com/images/default-og.jpg`
              }
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${post.title} – Deo Bibila`} />
          <meta name="twitter:description" content={post.excerpt} />
          <meta
              name="twitter:image"
              content={
                post.image
                    ? `https://deobibila.com/images/${post.image}.jpg`
                    : `https://deobibila.com/images/default-og.jpg`
              }
          />
          <link
              rel="canonical"
              href={`https://deobibila.com/posts/${post.slug}`}
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
                        fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
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
                            fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
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
                        fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
                      }}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>

                  {/* Top Divider */}
                  <hr className="border-gray-200 mt-4 mb-2" />

                  {/* Action bar */}
                  <div className="flex items-center justify-end text-gray-600 text-sm">
                    {/* Share button */}
                    <button
                        type="button"
                        onClick={() => {
                          const url = `https://deobibila.com/posts/${post.slug}`;
                          if (navigator.share) {
                            navigator.share({ title: post.title, url });
                          } else {
                            navigator.clipboard.writeText(url);
                            alert("Link copied to clipboard!");
                          }
                        }}
                        className="hover:text-black transition mr-2 p-2 rounded-md hover:bg-gray-100"
                        aria-label="Share"
                    >
                      <IoShareOutline className="h-6 w-6 text-gray-600 hover:text-black" />
                    </button>

                    {/* 3-dots menu (click to open) */}
                    <div ref={menuRef} className="relative">
                      <button
                          type="button"
                          onClick={() => setMenuOpen((v) => !v)}
                          className="hover:text-black transition p-2 rounded-md hover:bg-gray-100"
                          aria-label="More options"
                          aria-expanded={menuOpen}
                          aria-haspopup="menu"
                      >
                        ⋮
                      </button>

                      {menuOpen && (
                          <div
                              role="menu"
                              className="absolute right-0 top-full mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-sm z-50 overflow-hidden"
                          >
                            <button
                                type="button"
                                role="menuitem"
                                className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                                onClick={() => {
                                  setMenuOpen(false);
                                  window.location.href = `mailto:deo@deobibila.tech?subject=${encodeURIComponent(
                                      `Issue with ${post.title}`
                                  )}&body=${encodeURIComponent(
                                      `Page: https://deobibila.com/posts/${post.slug}\n\nIssue:\n`
                                  )}`;
                                }}
                            >
                              Report an issue
                            </button>
                          </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Divider */}
                  <hr className="border-gray-200 mt-2 mb-6" />
                </header>


                {/* Content */}
                <div
                    ref={contentRef}
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
