import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hello World, I'm Deo — a future software engineer passionate about back-end,infrastructure and machine learning.
          </h1>
          <h2 className="text-2xl font-bold">
            I Recently graduated with my Bachelor of Science in Computer Science (as of 2025). I’m working on open source projects, building the skills to launch impactful systems at scale and land a role.
          </h2>
          <h4>
            Favorite Quote: "Sometime People aren't Perfect, it doesn't mean they're not good" (I read it somewhere ha ha)
          </h4>
          <p>
            This portfolio is built with Next.js and a library called next-mdx.
            It allows you to write Markdown and focus on the content of your
            portfolio.
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
