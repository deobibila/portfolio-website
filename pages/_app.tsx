import "tailwindcss/tailwind.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/header";
import { Auth0Provider } from "@auth0/auth0-react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link
            rel="alternate"
            type="application/rss+xml"
            title="Deo's Blog RSS Feed"
            href="/rss.xml"
        />

        {/* Global schema markup */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Deo Bibila",
                "url": "https://deobibila.com",
                "image": "https://deobibila.com/photo.jpeg",
                "sameAs": [
                  "https://github.com/deobibila",
                  "https://linkedin.com/in/deobibila",
                  "https://x.com/deobibila",
                  "https://scholar.google.com/citations?hl=en&user=JIsp2fQAAAAJ",
                  "https://orcid.org/0009-0004-2808-1460"
                  // TODO: Add arXiv profile link once Deo Bibila is published

                ],
                "jobTitle": "Infrastructure & ML Engineer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance"
                },
                "alumniOf": {
                  "@type": "CollegeOrUniversity",
                  "name": "Western Governors University"
                }
              })
            }}
        />
      </Head>

      <Header/>

      <main className="py-14">
        <Component {...pageProps} />
      </main>
      <SpeedInsights />
      <Analytics />
    </Auth0Provider>
  );
}
