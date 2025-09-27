'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import placeholderData from '@/lib/placeholder-images.json';

const testimonials = [
    {
        name: "PlushSteadDécor",
        quote: "I got to know about Olaiya through a friend. It's been close to two months since then and I can say he loves what he does (strategizing) and he really knows his onions. He is also big on client quality work...",
        image: placeholderData.placeholderImages.find(p => p.id === 'client1'),
        title: "Home Decor Brand"
    },
    {
        name: "Rahmatullahi Sanusi",
        quote: "Mr. Olaiya is an eyeopener on marketing, content strategy, business strategy. I joined one of his free masterclasses where I learnt what a Muslim Entrepreneur should look like. I begin to see business, not just where I make money but as an act of ‘ibaadah...",
        image: placeholderData.placeholderImages.find(p => p.id === 'client2'),
        title: "Digital Marketer"
    },
    {
        name: "Hamdallah Rabiu",
        quote: "Working with Mr Olaiya is definitely one of the best gifts I got this year. Before now, I knew little about brand strategy and contents that work. But barely 3 months of working together, a lot of things have changed...",
        image: placeholderData.placeholderImages.find(p => p.id === 'client3'),
        title: "Brand Strategist"
    },
    {
        name: "Ajadi Haneefah",
        quote: "I'm grateful for the opportunity to work under the guidance of Olaiya. His leadership style is truly inspiring, blending professionalism with genuine care for his team. As a team member, I've witnessed firsthand his commitment to nurturing talent and fostering growth...",
        image: placeholderData.placeholderImages.find(p => p.id === 'client4'),
        title: "Team Member"
    },
    {
        name: "Aishat Elusogbon",
        quote: "Of all the things I’ve gained from working with Mr. Olaiya over the years, the one that has truly stayed with me is the value of clarity. He’s helped me see that whether it’s in Islam, business, or personal growth, clarity makes all the difference in moving forward.",
        image: placeholderData.placeholderImages.find(p => p.id === 'client5'),
        title: "Client"
    },
    {
        name: "©Nur by Ibtisaam Secret Hub",
        quote: "Olaiya is someone that I will always be glad to work with, because why not? He has the charisma of helping MUSLIM brands grow beyond imagination, get halal visibility, and at the same time, move closer to their Creator...",
        image: placeholderData.placeholderImages.find(p => p.id === 'client6'),
        title: "Client"
    }
];


const Testimonials = () => {
    return (
        <section id="testimonials" className="relative py-32 light:bg-white dark:bg-background overflow-hidden">
            <div className="absolute inset-0 opacity-20 dark:opacity-20 light:opacity-100">
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-indigo-500/10 dark:to-purple-500/10 light:from-indigo-100 light:to-purple-100 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-pink-500/10 dark:to-orange-500/10 light:from-pink-100 light:to-orange-100 blur-3xl"></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-20">
                    <div className="anim d-1 inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
                        <Star className="w-4 h-4" />
                        <span>Client Reviews</span>
                    </div>
                    <h2 className="anim d-2 text-4xl sm:text-5xl font-light tracking-tighter mb-6">
                        What People Say about <span className="font-semibold">Olaiya</span>
                    </h2>
                    <p className="anim d-3 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        See how real stories and results from clients reflect the impact of expert guidance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.slice(0, 6).map((testimonial, index) => (
                        <article key={index} className={`anim d-${3 + index} light:bg-white dark:glass-card rounded-3xl p-8 light:shadow-lg light:border light:border-gray-100 light:hover:shadow-xl transition-all duration-500 transform light:hover:-translate-y-1 ${index === 1 ? 'light:bg-gradient-to-br light:from-red-50 light:to-orange-50 dark:glass-card light:border-red-100' : ''}`}>
                            <div className="flex items-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                            “{testimonial.quote}”
                            </p>
                            <div className="flex items-center gap-4">
                                <div>
                                    <div className="font-semibold">{testimonial.name}</div>
                                    <div className="text-muted-foreground text-sm">{testimonial.title}</div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center anim d-6">
                    <Button asChild size="lg" className="rounded-full">
                        <Link href="/testimonials">
                            Read all success stories <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
