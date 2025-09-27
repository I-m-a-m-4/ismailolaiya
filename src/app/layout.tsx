import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/ThemeProvider';
import Cursor from '@/components/Cursor';
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  title: 'Ismail Adekunle-Olaiya | Pro-Islamic Business & Growth Strategist',
  description: 'As a leading business strategist for Muslims, Ismail A. Olaiya (Abu Sufyaan) offers expert consulting to help Muslim entrepreneurs achieve sustainable growth without compromising their Deen. Partner with a trusted growth consultant and brand strategist.',
  keywords: ['business strategist', 'business consultant', 'growth strategist', 'business strategist for Muslims', 'business consultant for Muslims', 'growth strategist for Muslims', 'business developer', 'business developer for Muslims', 'brand strategist', 'brand strategist for Muslims', 'Ismail Adekunle-Olaiya', 'Abu Sufyaan', 'Islamic business'],
  authors: [{ name: 'Ismail Adekunle-Olaiya' }],
  creator: 'Ismail Adekunle-Olaiya',
  publisher: 'Ismail Adekunle-Olaiya',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ismail Adekunle-Olaiya",
    "alternateName": "Abu Sufyaan",
    "url": "https://www.ismailolaiya.com",
    "jobTitle": "Business Strategist and Growth Consultant for Muslims",
    "knowsAbout": ["Business Strategy", "Growth Hacking", "Brand Strategy", "Islamic Business Ethics", "Entrepreneurship"],
    "alumniOf": "Obafemi Awolowo University",
    "nationality": "Nigerian"
  };

  const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Ismail Adekunle-Olaiya Business & Growth Strategy",
      "image": "https://res.cloudinary.com/dd1czj85j/image/upload/v1758632419/FB_IMG_1758620993468_zoahas.jpg",
      "url": "https://www.ismailolaiya.com",
      "telephone": "+2348100985574",
      "email": "talktome@ismailolaiya.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lagos",
        "addressLocality": "Lagos",
        "addressCountry": "NG"
      },
      "description": "A Pro-Islamic business strategist and growth expert dedicated to unlocking the potential of Muslims. As a professional business developer and brand strategist, he empowers organizations through clarity, structure, and long-term thinking.",
      "founder": {
          "@type": "Person",
          "name": "Ismail Adekunle-Olaiya"
      },
      "servesCuisine": [],
      "priceRange": "$$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      ]
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="icon" href="https://res.cloudinary.com/dd1czj85j/image/upload/v1758632419/FB_IMG_1758620993468_zoahas.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ismail Adekunle-Olaiya | Pro-Islamic Business & Growth Strategist" />
        <meta property="og:description" content="Partner with a leading business and brand strategist for Muslims to build a thriving, Deen-aligned enterprise. Get expert growth consulting and strategy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ismailolaiya.com" />
        <meta property="og:image" content="https://www.ismailolaiya.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ismail Adekunle-Olaiya | Pro-Islamic Business & Growth Strategist" />
        <meta name="twitter:description" content="Partner with a leading business and brand strategist for Muslims to build a thriving, Deen-aligned enterprise. Get expert growth consulting and strategy." />
        <meta name="twitter:image" content="https://www.ismailolaiya.com/twitter-image.jpg" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />
          <Cursor />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
