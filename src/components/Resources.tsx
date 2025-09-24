import Image from 'next/image';
import { Button } from '@/components/ui/button';
import placeholderData from '@/lib/placeholder-images.json';

const bookImage = placeholderData.placeholderImages.find(p => p.id === 'book');

const Resources = () => {
  return (
    <section id="resources" className="py-20" style={{'--animation-delay': '0.8s'} as React.CSSProperties}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">From My Bookshelf</h2>
        </header>
        <article className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center anim d-2">
             {bookImage && <div className="relative w-72 h-96 rounded-xl glass-card p-2">
                <Image
                    src={bookImage.imageUrl}
                    alt={bookImage.description}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={bookImage.imageHint}
                    className="rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>}
          </div>
          <div className="text-center lg:text-left anim d-3">
            <h3 className="text-2xl font-semibold tracking-tight">How the Best Generation Built Wealth—Exploring How the Companions Run their Businesses without Compromise</h3>
            <p className="mt-4 text-lg text-muted-foreground">
             This book is your passport to the real Islamic heritage and wealth journey: bold, planned, and bursting with rich insights. From students and dreamers to business owners and global investors, this book is for anyone ready to trade confused stereotypes for fresh Islamic-informed perspectives.
            </p>
            <p className="mt-4 font-semibold text-primary text-xl">Coming Soon!</p>
            <div className="mt-6">
              <Button disabled size="lg" variant="secondary">Get Notified (Coming Soon)</Button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Resources;
