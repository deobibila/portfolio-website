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
            Hello World, I'm Deo — a future software engineer passionate about back-end, infrastructure and machine
            learning.
          </h1>
          <h4 className="text-blue-400 italic">
            Favorite Quote: "Sometime People aren't Perfect, it doesn't mean they're not good" (I read it somewhere ha
            ha)
          </h4>
          <p>
            I Recently graduated with my Bachelor of Science in Computer Science.
            I’m working on open source projects related to ML and Infrastructure.
          </p>

          <p>Interests: Machine Learning Systems, Backend Infra, Applied Mathematics, Statistical Modeling, Distributed
            Computing, Scalable Systems, Research</p>

          <h1>
            Investments
          </h1>
          <p>
            None
          </p>
          <div className="flex justify-center space-x-6 pt-6 border-t mt-10">
            <a href="https://github.com/deobibila" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-gray-600 hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M12 .5C5.7.5.5 5.8.5 12.2c0 5.2 3.4 9.6 8.1 11.1.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.6-1.5-1.4-1.9-1.4-1.9-1.2-.9.1-.9.1-.9 1.3.1 2 .8 2 .8 1.2 2 3.2 1.4 4 .9.1-.9.5-1.4.9-1.7-2.7-.3-5.6-1.4-5.6-6.1 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.7.1-3.5 0 0 1-.3 3.4 1.3 1-.3 2-.4 3-.4 1 0 2 .1 3 .4 2.4-1.6 3.4-1.3 3.4-1.3.7 1.8.3 3.2.1 3.5.8.9 1.3 2 1.3 3.4 0 4.8-2.9 5.8-5.6 6.1.5.4 1 .9 1 .9v2.7c0 .3.2.7.8.6 4.7-1.5 8.1-5.9 8.1-11.1C23.5 5.8 18.3.5 12 .5z"/>
              </svg>
            </a>

            <a href="https://linkedin.com/in/deobibila" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-gray-600 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M20.447 20.452H17.4v-5.568c0-1.328-.027-3.039-1.85-3.039-1.851 0-2.134 1.445-2.134 2.939v5.668H10.36V9.045h2.918v1.561h.042c.407-.774 1.4-1.59 2.881-1.59 3.075 0 3.644 2.024 3.644 4.654v6.782zM5.337 7.433c-.939 0-1.699-.76-1.699-1.699s.76-1.699 1.699-1.699 1.699.76 1.699 1.699-.76 1.699-1.699 1.699zM6.745 20.452H3.931V9.045h2.814v11.407zM22.225 0H1.771C.792 0 0 .771 0 1.722v20.555C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.278V1.722C24 .771 23.2 0 22.222 0z"/>
              </svg>
            </a>

            <a href="https://twitter.com/deobibila" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-gray-600 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.004.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.924 2.208-4.924 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.163-10.148-5.144-.426.722-.666 1.561-.666 2.475 0 1.709.869 3.216 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.085.631 1.953 2.445 3.377 4.604 3.417-1.68 1.316-3.809 2.101-6.102 2.101-.396 0-.788-.023-1.17-.067 2.179 1.394 4.768 2.209 7.557 2.209 9.142 0 14.307-7.721 14.307-14.417 0-.22-.004-.439-.014-.657.98-.703 1.8-1.56 2.46-2.548l-.047-.02z"/>
              </svg>
            </a>
          </div>

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
