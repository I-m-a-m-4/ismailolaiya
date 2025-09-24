import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "PlushSteadDécor",
    quote: "I got to know about Olaiya through a friend. It's been close to two months since then and I can say he loves what he does (strategizing) and he really knows his onions. He is also big on client quality work..."
  },
  {
    name: "Rahmatullahi Sanusi",
    quote: "Mr. Olaiya is an eyeopener on marketing, content strategy, business strategy. I joined one of his free masterclasses where I learnt what a Muslim Entrepreneur should look like. I begin to see business, not just where I make money but as an act of ‘ibaadah."
  },
  {
    name: "Hamdallah Rabiu",
    quote: "Working with Mr Olaiya is definitely one of the best gifts I got this year. Before now, I knew little about brand strategy and contents that work. But barely 3 months of working together, a lot of things have changed."
  },
  {
    name: "Ajadi Haneefah",
    quote: "I'm grateful for the opportunity to work under the guidance of Olaiya. His leadership style is truly inspiring, blending professionalism with genuine care for his team. As a team member, I've witnessed firsthand his commitment to nurturing talent and fostering growth."
  },
  {
    name: "Aishat Elusogbon",
    quote: "Of all the things I’ve gained from working with Mr. Olaiya over the years, the one that has truly stayed with me is the value of clarity. He’s helped me see that whether it’s in Islam, business, or personal growth, clarity makes all the difference in moving forward."
  }
];


const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20" style={{'--animation-delay': '0.3s'} as React.CSSProperties}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl tracking-tight font-semibold anim d-0">What People Say about Olaiya</h2>
                  <p className="mt-3 text-muted-foreground anim d-1">See how real stories and results from clients reflect the impact of expert guidance.</p>
                </header>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {testimonials.slice(0, 5).map((testimonial, index) => (
                    <article key={index} className={`rounded-xl glass-card p-6 hover:bg-white/20 dark:hover:bg-white/10 transition anim d-${index + 2}`}>
                        <div className="flex items-center gap-3">
                            <Avatar className="ring-2 ring-background">
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium">{testimonial.name}</p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">“{testimonial.quote}”</p>
                    </article>
                  ))}
                </div>
                <div className="mt-10 text-center anim d-6">
                    <Button asChild variant="outline">
                        <Link href="/testimonials">
                            Read more success stories <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
