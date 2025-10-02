
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

const bannerImage = placeholderData.placeholderImages.find(p => p.id === 'interviews-banner');

async function getKeynoteContent() {
    try {
        const docRef = doc(db, 'siteContent', 'keynotePage');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        }
    } catch (error) {
        console.error("Error fetching keynote content: ", error);
    }
    // Return default content if fetch fails or document doesn't exist
    return {
        title: 'Keynote Sessions with Olaiya',
        subtitle: 'Your Direct Line to Strategic Clarity',
        description: 'This is a unique opportunity to engage directly with me in a group setting. I’ll address your most pressing pain points, answer common questions, and provide live, unscripted strategic advice to help you overcome your business challenges.',
        priceInfo: 'Free for all of 2024 — an investment in our Ummah.'
    };
}

const KeynotePage = async () => {
    const content = await getKeynoteContent();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <section className="relative h-80 md:h-96 w-full flex items-center justify-center text-center text-white overflow-hidden">
            {bannerImage && (
                <Image
                    src={bannerImage.imageUrl}
                    alt="Keynote Sessions Banner"
                    fill
                    className="object-cover scale-110 blur-sm"
                    data-ai-hint={bannerImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="relative z-10 p-4 anim d-1 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4" />
                    <span>Live Q&A</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">{content.title}</h1>
                <p className="mt-4 text-lg md:text-xl text-white/90">
                   {content.subtitle}
                </p>
            </div>
        </section>

        <section id="keynote-content" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-semibold mb-4">About The Session</h2>
                        <div className="prose prose-lg dark:prose-invert" dangerouslySetInnerHTML={{ __html: content.description.replace(/\n/g, '<br />') }}>
                        </div>
                    </div>
                    <aside className="md:col-span-1">
                        <div className="sticky top-24 glass-card p-6">
                            <h3 className="text-xl font-semibold mb-4">Session Details</h3>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    <div>
                                        <p className="font-semibold text-foreground">Date</p>
                                        <p>To be announced</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <div>
                                        <p className="font-semibold text-foreground">Pricing</p>
                                        <p className="text-primary font-bold">{content.priceInfo}</p>
                                    </div>
                                </li>
                            </ul>
                             <div className="mt-6">
                                <p className="text-sm text-muted-foreground mb-4">Sessions will become a paid offering starting next year. Take advantage of this free opportunity!</p>
                                <Button asChild className="w-full">
                                    <a href="#contact">Book Your Spot</a>
                                </Button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KeynotePage;
