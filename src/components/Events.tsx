import { Button } from '@/components/ui/button';

const Events = () => {
    return (
        <section id="events" className="py-20" style={{'--animation-delay': '0.7s'} as React.CSSProperties}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Events & Sessions</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-300">
                    In between building businesses, writing books, and navigating Africa’s opportunities, I occasionally host live strategy webinars and conversations for leaders, entrepreneurs, and builders like you. Want in?
                </p>
                <div className="mt-8">
                    <Button size="lg" variant="outline" className="text-white bg-white/10 hover:bg-white/20 border-white/20">
                        Get Notified (Coming Soon)
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Events;
