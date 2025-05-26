import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const LinkIcon: React.FC = () => (
    <FiExternalLink className="ml-1 w-4 h-4" />
);

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
          <Link href="/projects">Projects</Link>
          <Link href="/research">Research</Link>
          <a
              href="/resume-placeholder.pdf"
              className="flex items-center text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
          >

            Resume <LinkIcon />

          </a>
        </nav>
      </Container>
    </header>
  );
}
