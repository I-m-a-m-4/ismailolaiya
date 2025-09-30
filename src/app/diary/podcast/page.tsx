
import { getAllPodcasts } from '@/lib/podcasts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { Mic, PlayCircle } from 'lucide-react';
import Link from 'next/link';

const PodcastPage = async () => {
  const podcasts = await getAllPodcasts();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <section id="podcast-archive" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6 anim d-1">
                  <Mic className="w-4 h-4" />
                  <span>Podcast Archive</span>
              </div>
              <h1 className="text-4xl tracking-tight font-semibold anim d-2">Scale with Olaiya: The Podcast</h1>
              <p className="mt-4 text-xl text-muted-foreground anim d-3">Actionable insights on business, strategy, and faith for the modern Muslim entrepreneur.</p>
            </header>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {podcasts.map((podcast, index) => {
                const podcastImage = placeholderData.placeholderImages.find(p => p.id === podcast.imageId);
                return (
                  <Link key={podcast.slug} href={`/diary/podcast/${podcast.slug}`} className={`group anim d-${index + 3}`}>
                    <div className="rounded-2xl glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white/10">
                       {podcastImage && (
                          <div className="aspect-square relative">
                              <Image
                                  src={podcastImage.imageUrl}
                                  alt={podcast.title}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  data-ai-hint={podcastImage.imageHint}
                              />
                               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                  <PlayCircle className="w-16 h-16 text-white/80" />
                               </div>
                          </div>
                       )}
                       <div className="p-5 flex flex-col flex-grow">
                          <h3 className="text-base font-semibold tracking-tight text-foreground flex-grow">{podcast.title}</h3>
                          <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                            <span>{podcast.duration}</span>
                            <span>{podcast.releaseDate}</span>
                          </div>
                       </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PodcastPage;
