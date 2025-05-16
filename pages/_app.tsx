import "tailwindcss/tailwind.css";

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Global schema markup */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Deo Bibila",
                "url": "https://deobibila.com",
                "sameAs": [
                  "https://github.com/deobibila",
                  "https://linkedin.com/in/deobibila",
                  "https://x.com/deobibila"
                ],
                "jobTitle": "Infrastructure & ML Engineer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance"
                },
                "alumniOf": {
                  "@type": "University",
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
    </Auth0Provider>
  );
}
