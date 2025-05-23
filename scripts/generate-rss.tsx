import fs from "fs";
import path from "path";
import { Feed } from "rss";
import { getAllPosts } from "../lib/getPost";

export async function generateRSSFeed() {
    const feed = new Feed({
        title: "Deo's Blog",
        description: "Experiments & Blog",
        id: "https://www.deobibila.com/",
        link: "https://www.deobibila.com/",
        language: "en",
        image: "https://www.deobibila.com/images/default-og.jpg",
        favicon: "https://www.deobibila.com/favicon.ico",
        copyright: `All rights reserved ${new Date().getFullYear()}, Deo Bibila`,
    });

    const posts = getAllPosts(["title", "excerpt", "slug", "date"]);

    posts.forEach((post) => {
        feed.addItem({
            title: post.title,
            id: `https://www.deobibila.com/posts/${post.slug}`,
            link: `https://www.deobibila.com/posts/${post.slug}`,
            description: post.excerpt,
            date: new Date(post.date),
        });
    });

    fs.writeFileSync(path.join(process.cwd(), "public", "rss.xml"), feed.xml({ indent: true }));
}
