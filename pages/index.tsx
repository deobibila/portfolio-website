import Head from "next/head";
import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Head>
        <title>Deo Bibila – Infrastructure & ML Engineer</title>
        <meta
            name="description"
            content="Deo Bibila is a software engineer focused on backend, infrastructure, and machine learning. Explore his projects, blog, and journey."
        />
        <meta
            name="keywords"
            content="Deo Bibila, Deo Gratias Bibila, software engineer, backend, infrastructure, machine learning, portfolio, blog"
        />
        <meta name="author" content="Deo Bibila" />
        <meta property="og:title" content="Deo Bibila – Infrastructure & ML Engineer" />
        <meta
            property="og:description"
            content="Explore Deo Bibila's personal website and software engineering projects."
        />
        <meta property="og:url" content="https://www.deobibila.com/" />
        <meta
            property="og:image"
            content="https://www.deobibila.com/desk.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hello World, I'm Deo — a future software engineer passionate about back-end,infrastructure and machine learning.
          </h1>
          <h4 className="text-blue-400 italic">
            Favorite Quote: "Sometime People aren't Perfect, it doesn't mean they're not good" (I read it somewhere ha ha)
          </h4>
          <p>
            I Recently graduated with my Bachelor of Science in Computer Science (as of 2025).
            I’m working on open source projects, building the skills to launch impactful systems at scale and land a role.
          </p>

          <p>I'll keep updating things everytime i build a project or if there is something new in my life.</p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/desk.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  );
}

export default HomePage;
