
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import Link from 'next/link';
import { ArrowRight, Award, ImageIcon, Library, MessageSquare, Mic, Newspaper } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Diary of a Deen-Conscious Strategist | Scale with Olaiya',
    description: 'Explore the diary of Ismail Adekunle-Olaiya, a Pro-Islamic business strategist. Discover insights on business, faith, and leadership through reviews, news, podcasts, and more.',
    openGraph: {
        title: 'Diary of a Deen-Conscious Strategist | Scale with Olaiya',
        description: 'Explore insights on business, faith, and leadership from a Pro-Islamic business strategist.',
        type: 'website',
        url: 'https://www.scalewitholaiya.com/diary',
    },
};


const bannerImage = placeholderData.placeholderImages.find(p => p.id === 'diary-banner');

const diarySections = [
  { href: '/diary/reviews', label: 'Reviews', description: 'Real stories and results from clients.', imageId: 'diary-reviews', icon: Award },
  { href: '/diary/news', label: 'News', description: 'Latest updates and announcements.', imageId: 'diary-news', icon: Newspaper },
  { href: '/diary/underdogs', label: 'Underdogs', description: 'Stories of resilience and success.', imageId: 'diary-underdogs', icon: Award },
  { href: '/diary/podcast', label: 'Podcast', description: 'Conversations on business and faith.', imageId: 'diary-podcast', icon: Mic },
  { href: '/diary/resource-library', label: 'Resource Library', description: 'A collection of tools and guides.', imageId: 'diary-resource-library', icon: Library },
  { href: '/diary/interviews', label: 'Interviews', description: 'In-depth conversations.', imageId: 'diary-interviews', icon: MessageSquare },
  { href: '/diary/gallery', label: 'Gallery', description: 'A visual journey of our work.', imageId: 'diary-gallery', icon: ImageIcon },
];

const DiaryPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white">
            {bannerImage && (
                <Image
                    src={bannerImage.imageUrl}
                    alt="Diary Banner"
                    fill
                    className="object-cover object-top"
                    data-ai-hint={bannerImage.imageHint}
                    priority
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="relative z-10 p-4 anim d-1">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter">Diary of a Deen-Conscious Strategist</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">A curated collection of insights, stories, and resources from my journey as a Pro-Islamic business consultant.</p>
            </div>
        </section>

        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground anim d-1">A PEEK INTO THE<br />Diary of a Deen-Conscious Strategist</h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed anim d-2">
                    This is more than just a blog—it's a window into my world as a business strategist committed to the Ummah. Here, I share my thoughts on navigating the modern market with Islamic principles, stories of underdog entrepreneurs who inspire me, and practical resources to help you scale your vision without compromising your values. Explore reviews, news, podcast episodes, and more.
                </p>
            </div>
        </section>

        <section id="diary-grid" className="pb-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {diarySections.map((section, index) => {
                    const sectionImage = placeholderData.placeholderImages.find(p => p.id === section.imageId);
                    return (
                       <Link href={section.href} key={index} className="group relative aspect-square block overflow-hidden">
                           {sectionImage && (
                                <Image
                                    src={sectionImage.imageUrl}
                                    alt={section.label}
                                    fill
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    data-ai-hint={sectionImage.imageHint}
                                />
                           )}
                           <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-colors duration-300 group-hover:bg-black/40" />
                           <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                                <div className="p-4 bg-white/10 rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-90">
                                    <section.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-semibold tracking-tight">{section.label}</h3>
                                <p className="mt-2 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{section.description}</p>
                           </div>
                       </Link>
                    )
                  })}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DiaryPage;
