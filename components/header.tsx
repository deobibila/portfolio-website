import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { useRouter } from "next/router";


const LinkIcon: React.FC = () => (
    <FiExternalLink className="ml-1 w-4 h-4" />
);


import Container from "../components/container";

export default function Header() {
  const router = useRouter();
  const isActive = (href: string) => router.pathname === href;

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
        <nav className="flex justify-left space-x-6 text-base font-medium text-gray-700 mt-6 mb-6">
          <Link href="/" className={isActive("/") ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
            About
          </Link>

          <Link href="/posts" className={isActive("/posts") ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
            Blog
          </Link>

          <Link href="/projects">Projects</Link>
          <Link href="/research">Publications</Link>
          <a
              href="/resume.pdf"
              className="flex items-center text-sm text-blue-500 hover:text-blue-600"
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
