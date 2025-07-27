export default function Footer() {
    return (
        <footer className="mt-20 border-t pt-6 text-center text-sm text-gray-500">
            <p className="text-xs text-center text-gray-400 mt-12 mb-4">
                © {new Date().getFullYear()} Deo Bibila. Built with <span className="font-semibold">Next.js</span> + 💻 + ☕
            </p>
            <div className="mt-2 space-x-4">
                <a href="/sitemap.xml" className="hover:underline text-blue-400">
                    Sitemap
                </a>
                <a href="/robots.txt" className="hover:underline text-blue-400">
                    Robots
                </a>
            </div>
        </footer>
    );
}
