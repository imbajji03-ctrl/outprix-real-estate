// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://outprixrealestate.property"),
  title: {
    default: "Outprix Digital | Jaipur's #1 Real Estate Digital Marketing Agency",
    template: "%s | Outprix Digital",
  },
  description:
    "Outprix Digital is Jaipur's #1 real estate digital marketing agency. We help builders, developers & real estate brands generate more leads and close more deals with Meta Ads, Google Ads, SEO & Social Media.",
  keywords: [
    "real estate digital marketing agency jaipur",
    "real estate marketing jaipur",
    "property lead generation jaipur",
    "meta ads real estate jaipur",
    "google ads real estate jaipur",
    "outprix digital",
    "real estate seo jaipur",
  ],
  authors: [{ name: "Bajrang Choudhary", url: "https://outprixrealestate.property/about" }],
  creator: "Outprix Digital",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://outprixrealestate.property",
    siteName: "Outprix Digital",
    title: "Outprix Digital | Jaipur's #1 Real Estate Digital Marketing Agency",
    description:
      "We help real estate builders & developers generate more qualified leads and close more deals. Meta Ads, Google Ads, SEO & Social Media — exclusively for real estate.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Outprix Digital — Real Estate Digital Marketing Agency, Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outprix Digital | Real Estate Digital Marketing Agency Jaipur",
    description:
      "Jaipur's #1 real estate marketing agency. Meta Ads, Google Ads, SEO & Social Media for real estate brands.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-search-console-verification-code",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              name: "Outprix Digital",
              url: "https://outprixrealestate.property",
              logo: "https://outprixrealestate.property/logo.png",
              description:
                "Jaipur's #1 Real Estate Digital Marketing Agency. We help real estate builders and developers generate qualified leads through Meta Ads, Google Ads, SEO, and Social Media.",
              founder: {
                "@type": "Person",
                name: "Bajrang Choudhary",
                jobTitle: "Founder & Growth Strategist",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jaipur",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              telephone: "+919460382804",
              areaServed: "India",
              knowsAbout: [
                "Real Estate Digital Marketing",
                "Meta Ads",
                "Google Ads",
                "SEO",
                "Social Media Marketing",
                "Performance Marketing",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-brand-bg text-white font-body antialiased">{children}</body>
    </html>
  );
}
