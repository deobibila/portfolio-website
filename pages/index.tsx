import Head from "next/head";
import Container from "../components/container";
import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';

const inlineLink =
    "underline underline-offset-4 decoration-neutral-300 transition-colors hover:text-indigo-600 hover:decoration-indigo-600";

function HomePage() {
  return (
      <>
        <Head>
          <title>Deo Bibila – Infrastructure & ML Engineering</title>

          <link rel="canonical" href="https://deobibila.com/" />

          <meta
              name="description"
              content="Deo Bibila is a software engineer focused on backend, infrastructure, and machine learning. Explore his projects, blog, and journey."
          />
          <meta
              name="keywords"
              content="Deo Bibila, Deo Gratias Bibila, software engineer, backend, infrastructure, machine learning, portfolio, blog"
          />
          <meta name="author" content="Deo Bibila"/>
          <meta property="og:title" content="Deo Bibila – Infrastructure & ML Engineer"/>
          <meta
              property="og:description"
              content="Explore Deo Bibila's personal website and software engineering projects."
          />
          <meta property="og:url" content="https://deobibila.com/"/>
          <meta
              property="og:image"
              content="https://deobibila.com/photo.jpeg"
          />
          <meta name="twitter:card" content="summary_large_image"/>
        </Head>

        <div className="container max-w-4xl m-auto px-4 mt-12 md:mt-20">
          <Image
              src="/photo.jpeg"
              alt="Photo of Deo Bibila"
              width={220}
              height={220}
              className="rounded-full mx-auto"
              priority
          />
        </div>

        <Container>
          <div className="space-y-6 text-neutral-700">
            <h1 className="text-3xl md:text-5xl font-extrabold text-center text-neutral-900">
              Deo Bibila
            </h1>
            <p className="text-center text-neutral-500 mt-2">
              Infrastructure & ML Engineering | Distributed Systems
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-2 text-neutral-900">Me in 30 Seconds</h2>
            <hr className="border-t-2 border-neutral-200 mb-6 w-full" />

            <p>
              I'm a Computer Science Student. I'm especially interested in Backend
              infrastructure, distributed systems and ML. I might get into research later on too.
            </p>

            <p className="mt-4">
              I was born in Brazzaville, <a href="https://www.google.com/search?q=Republic+of+Congo" target="_blank" rel="noopener noreferrer" className={inlineLink}>the Republic of Congo</a>, and later moved to the United States when I was a teenager.
            </p>


            <h2 className="text-2xl font-bold mt-10 mb-2 text-neutral-900">What I'm Doing Now</h2>
            <hr className="border-t-2 border-neutral-200 mb-6 w-full" />
            <p>
              At the time i'm writing this, I'm starting to learn advanced system design by contributing to an open source tool in the infrastructure space.{" "}
              <a href='https://github.com/ray-project/ray/' target="_blank" rel="noopener noreferrer" className={inlineLink}>Ray</a> is the open source tool i'm starting to contribute to.
            </p>

            <p className="text-sm text-neutral-500 mt-2 italic">
              (Updated October 26th, 2026 — inspired by <a href="https://sivers.org/now" className={inlineLink} target="_blank" rel="noopener noreferrer">Derek Sivers</a>)
            </p>
            {/*
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
                <h3 className="font-bold text-lg">Distributed Caching System</h3>
                <p className="text-sm text-gray-600 mt-1">Built a Redis-based LRU cache with Go and Docker; benchmarked against memcached and tuned performance under 500ms at 1K RPS.</p>
                <p className="text-xs text-gray-500 mt-2">Go • Redis • Docker</p>
                <a href="https://github.com/deobibila/distributed-cache" className="text-blue-500 text-sm hover:underline mt-2 inline-block">View on GitHub →</a>
              </div>
              {/* Repeat for other projects
            </div>
            */}
            <div className="flex justify-center space-x-6 pt-6 border-t border-neutral-200 mt-10">
              <a href="mailto:deobibila@outlook.com" target="_blank" rel="noopener noreferrer" aria-label="Email Deo">
                <i className="fas fa-envelope text-neutral-500 hover:text-indigo-600 transition-colors text-xl"></i>
              </a>

              <a href="https://github.com/deobibila" target="_blank" rel="me noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github text-neutral-500 hover:text-indigo-600 transition-colors text-xl"></i>
              </a>

              <a href="https://linkedin.com/in/deobibila" target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin text-neutral-500 hover:text-indigo-600 transition-colors text-xl"></i>
              </a>

              <a href="https://twitter.com/deobibila" target="_blank" rel="me noopener noreferrer" aria-label="X" title="X (formerly Twitter)">
                <i className="fab fa-x-twitter text-neutral-500 hover:text-indigo-600 transition-colors text-xl"></i>
              </a>
            </div>

          </div>
          <p className="text-center text-sm text-neutral-400 mt-6">
            © {new Date().getFullYear()} Deo Bibila. Built with{" "}
            <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold ${inlineLink}`}
            >
              Next.js
            </a>{" "}
            + 💻 + ☕
          </p>
        </Container>

      </>
  );
}

export default HomePage;