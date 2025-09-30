

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllProducts } from '@/lib/products';
import ShopPageClient from './ShopPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Shop | Scale with Olaiya',
    description: 'Purchase essential resources like e-books and guides designed to help you build a thriving, Deen-aligned business. Authored by a practicing Pro-Islamic business strategist.',
    keywords: ['islamic business books', 'muslim entrepreneur resources', 'deen-aligned business', 'buy business books', 'Ismail Adekunle-Olaiya books'],
    openGraph: {
        title: 'Shop for Business Resources | Scale with Olaiya',
        description: 'Purchase essential resources to help you build a thriving, Deen-aligned business.',
        type: 'website',
        url: 'https://www.scalewitholaiya.com/shop',
    },
};


const ShopPage = async () => {
    const products = await getAllProducts();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <section id="shop" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-3xl text-center">
                  <h1 className="text-4xl md:text-5xl font-semibold tracking-tight anim d-0">My Shop</h1>
                  <p className="mt-3 text-xl text-muted-foreground anim d-1">Essential resources designed to help you build a thriving, Deen-aligned business.</p>
                </header>
                <ShopPageClient products={products} />
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;
