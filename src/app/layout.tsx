
import type { Metadata } from 'next';
import { Inter, Montserrat, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Scale with Olaiya | Pro-Islamic Business & Growth Strategist',
  description: 'As a leading business strategist for Muslims, Ismail A. Olaiya (Abu Sufyaan) offers expert consulting to help Muslim entrepreneurs achieve sustainable growth without compromising their Deen. Partner with a trusted growth consultant and brand strategist.',
  keywords: ['business strategist', 'business consultant', 'growth strategist', 'business strategist for Muslims', 'business consultant for Muslims', 'growth strategist for Muslims', 'business developer', 'business developer for Muslims', 'brand strategist', 'brand strategist for Muslims', 'Ismail Adekunle-Olaiya', 'Abu Sufyaan', 'Islamic business'],
  authors: [{ name: 'Ismail Adekunle-Olaiya' }],
  creator: 'Ismail Adekunle-Olaiya',
  publisher: 'Ismail Adekunle-Olaiya',
  icons: {
    icon: 'https://res.cloudinary.com/dd1czj85j/image/upload/v1758632419/FB_IMG_1758620993468_zoahas.jpg',
  },
  openGraph: {
      title: 'Scale with Olaiya | Pro-Islamic Business & Growth Strategist',
      description: 'Partner with a leading business and brand strategist for Muslims to build a thriving, Deen-aligned enterprise. Get expert growth consulting and strategy.',
      type: 'website',
      url: 'https://www.scalewitholaiya.com',
      images: [
        {
          url: 'https://res.cloudinary.com/dd1czj85j/image/upload/v1758632419/FB_IMG_1758620993468_zoahas.jpg',
        },
      ],
  },
  twitter: {
      card: 'summary_large_image',
      title: 'Scale with Olaiya | Pro-Islamic Business & Growth Strategist',
      description: 'Partner with a leading business and brand strategist for Muslims to build a thriving, Deen-aligned enterprise. Get expert growth consulting and strategy.',
      images: ['https://www.scalewitholaiya.com/twitter-image.jpg'],
  },
  verification: {
    google: 'ANdRyz9MDSCCj82hKy5TO3KRcRakNIxH4wEImuuEFEs',
  },
  robots: {
    index: true,
    follow: true,
  },
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
    "url": "https://www.scalewitholaiya.com",
    "jobTitle": "Business Strategist and Growth Consultant for Muslims",
    "knowsAbout": ["Business Strategy", "Growth Hacking", "Brand Strategy", "Islamic Business Ethics", "Entrepreneurship"],
    "alumniOf": "Obafemi Awolowo University",
    "nationality": "Nigerian"
  };

  const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Scale with Olaiya Business & Growth Strategy",
      "image": "https://res.cloudinary.com/dd1czj85j/image/upload/v1758632419/FB_IMG_1758620993468_zoahas.jpg",
      "url": "https://www.scalewitholaiya.com",
      "telephone": "+2349073999745",
      "email": "info@scalewitholaiya.com",
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
            "Thursday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Friday",
            "opens": "09:00",
            "closes": "11:00"
        }
      ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${plusJakartaSans.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z96H3F68GP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z96H3F68GP');
          `}
        </Script>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
