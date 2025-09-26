import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/ThemeProvider';
import Cursor from '@/components/Cursor';

export const metadata: Metadata = {
  title: 'Ismail Adekunle-Olaiya | Pro-Islamic Business & Growth Strategist',
  description: 'Ismail A. Olaiya helps Muslim entrepreneurs build thriving businesses without compromising their Deen. Unlock clarity and long-term growth with a proven strategist.',
  keywords: ['Ismail Adekunle-Olaiya', 'Abu Sufyaan', 'Muslim entrepreneur', 'Islamic business', 'business strategist', 'growth expert', 'halal business', 'pro-islamic'],
  authors: [{ name: 'Ismail Adekunle-Olaiya' }],
  creator: 'Ismail Adekunle-Olaiya',
  publisher: 'Ismail Adekunle-Olaiya',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dd1czj85j/image/upload/v1758632419/FB_IMG_1758620993468_zoahas.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ismail Adekunle-Olaiya | Pro-Islamic Business & Growth Strategist" />
        <meta property="og:description" content="Ismail A. Olaiya helps Muslim entrepreneurs build thriving businesses without compromising their Deen. Unlock clarity and long-term growth with a proven strategist." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ismailolaiya.com" />
        {/* Add your OG image URL below */}
        {/* <meta property="og:image" content="https://www.ismailolaiya.com/og-image.jpg" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ismail Adekunle-Olaiya | Pro-Islamic Business & Growth Strategist" />
        <meta name="twitter:description" content="Ismail A. Olaiya helps Muslim entrepreneurs build thriving businesses without compromising their Deen. Unlock clarity and long-term growth with a proven strategist." />
        {/* Add your Twitter image URL below */}
        {/* <meta name="twitter:image" content="https://www.ismailolaiya.com/twitter-image.jpg" /> */}
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Cursor />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
