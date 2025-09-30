
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Events & Sessions | Scale with Olaiya',
    description: 'Join live strategy webinars and conversations with Ismail Adekunle-Olaiya, a Pro-Islamic business strategist. Get notified about upcoming events for leaders, entrepreneurs, and builders.',
    keywords: ['business events', 'strategy webinars', 'Islamic business seminars', 'entrepreneur workshops', 'Ismail Adekunle-Olaiya events'],
};

const EventsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <section id="events" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-3xl text-center">
                  <h1 className="text-3xl tracking-tight font-semibold anim d-0">Events & Sessions</h1>
                  <p className="mt-3 text-muted-foreground anim d-1">
                    In between building businesses, writing books, and navigating Africa’s opportunities, I occasionally host live strategy webinars and conversations for leaders, entrepreneurs, and builders like you. Want in?
                  </p>
                </header>

                <div className="mt-12 text-center anim d-2">
                    <p className="text-lg text-muted-foreground mb-8">There are no upcoming events at the moment. Sign up to be the first to know!</p>
                    <Button size="lg" variant="outline">
                        Get Notified (Coming Soon)
                    </Button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
