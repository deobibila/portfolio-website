import Link from "next/link";
import Container from "../components/container";

export default function Header() {

  const handleDownload = async () => {
    try {
      return await fetch("/api/resumeLog", {
        method: "POST",
      });
    } catch (error) {
      console.error("Failed to log resume download", error);
    }
  };

  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-4">
          <Link href="/">About</Link>
          <Link href="/posts/">Blog</Link>
          <Link href="https://github.com/deobibila">Projects</Link>
          <Link href="https://scholar.google.com.au/citations?hl=en&user=JIsp2fQAAAAJ">Research</Link>
          <a
              href="/resume-placeholder.pdf"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
          >
            Resume
          </a>
        </nav>
      </Container>
    </header>
  );
}
