export default function Footer() {
    return (
        <footer className="mt-20 border-t pt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Deo Bibila</p>
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
