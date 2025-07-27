import Head from "next/head";
import Container from "../components/container";
import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';


function HomePage() {
  return (
      <>
        <Head>
          <title>Deo Bibila – Infrastructure & ML Engineering</title>
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
          <meta property="og:url" content="https://www.deobibila.com/"/>
          <meta
              property="og:image"
              content="https://www.deobibila.com/photo.jpeg"
          />
          <meta name="twitter:card" content="summary_large_image"/>
        </Head>

        <div className="container max-w-4xl m-auto px-4 mt-20">
          <Image
              src="/photo.jpeg"
              alt="Deo Bibila"
              width={220}
              height={220}
              className="rounded-full mx-auto"
              priority
          />
        </div>

        <Container>
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-center">
              Deo Bibila
            </h1>
            <p className="text-center text-gray-600 mt-2">
              Early-career Engineer | Infrastructure & ML Engineering | Backend Systems
            </p>
            <h2 className="text-xl font-semibold mt-10">Me in <span className="inline-block bg-yellow-400 text-black px-2 py-1 text-xs rounded-full uppercase">30 </span>
               Seconds</h2>
            <hr className="border-t-2 border-gray-200 mb-6 w-full" />

            <p className="mt-4">
              I was born in Brazzaville, <a href="https://www.google.com/search?q=Republic+of+Congo" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">the Republic of Congo</a>, and later moved to the United States when I was a teenager.
              Brazzaville is quiet and rarely in the headlines — most people haven't heard about it.
            </p>

            <p>I recently earned my B.S. in Computer Science. I'm especially interested in backend infrastructure,
              distributed systems, and applied ML.

            </p>
            <p>In the meantime, I'm fighting my demons daily on{" "}
              <a
                  href="https://leetcode.com/u/deobibila/"
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-blue-500 hover:underline"
              >
                LeetCode →
              </a></p>


            <p className="mt-4">
              <span className="font-semibold text-blue-400">Interests:</span>{' '}
              Machine Learning Systems, Applied AI, Backend Infrastructure,
              Statistical Modeling, Distributed Computing, Scalable Systems, Research.
            </p>

            <h4 className="text-blue-400 italic">
              Favorite Quote:
            </h4>

            <blockquote
                itemScope
                itemType="https://schema.org/CreativeWork"
                className="border-l-4 border-blue-400 pl-4 italic text-blue-500 mt-6"
            >
              <p itemProp="text">
                "Sometimes people aren't perfect. It doesn't mean they're not good."
              </p>
              <footer className="text-sm text-gray-600 mt-2">
                — <cite itemProp="about">Emma Swan, Once Upon a Time</cite>
              </footer>
            </blockquote>

            <h2 className="text-2xl font-bold mt-10 mb-2">What I'm Doing Now</h2>
            <hr className="border-t-2 border-gray-200 mb-6 w-full" />
            <p className="text-gray-700">
              Learning advanced system design while contributing to open source tools in the backend/infrastructure space.
              Exploring ideas for a blog series on scaling ML inference and cost-aware engineering (think Pinterest + Meta).
            </p>
            <p className="text-gray-700">
              Outside of tech, I’m training consistently at the gym, working on self-discipline, and building a surprise side project for someone special 🎁.
            </p>
            <p className="text-sm text-gray-500 mt-2 italic">
              (Updated July 26th, 2025 — inspired by <a href="https://sivers.org/now" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Derek Sivers</a>)
            </p>



            <div className="flex justify-center space-x-6 pt-6 border-t mt-10">
              <a href="mailto:deobibila@outlook.com" target="_blank" rel="noopener noreferrer" aria-label="Email Deo">
                <i className="fas fa-envelope text-gray-600 hover:text-red-500 text-xl"></i>
              </a>

              <a href="https://github.com/deobibila" target="_blank" rel="me noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github text-gray-600 hover:text-black text-xl"></i>
              </a>

              <a href="https://linkedin.com/in/deobibila" target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin text-gray-600 hover:text-blue-600 text-xl"></i>
              </a>

              <a href="https://twitter.com/deobibila" target="_blank" rel="me noopener noreferrer" aria-label="X" title="X (formerly Twitter)">
                <i className="fab fa-x-twitter text-gray-600 hover:text-gray-800 text-xl"></i>
              </a>
            </div>

          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            © {new Date().getFullYear()} Deo Bibila. Built with{" "}
            <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-400 hover:underline"
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
