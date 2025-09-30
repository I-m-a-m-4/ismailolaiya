'use client';
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";
import MotionWrap from "./MotionWrap";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import placeholderData from "@/lib/placeholder-images.json";
import { Avatar, AvatarFallback } from "./ui/avatar";

const reviews = [
    {
        name: "PlushSteadDécor",
        quote: "Working with Olaiya has been a game-changer for my business and I'm pleased with the progress we've made so far. If you're looking for a deen-conscious business strategist who can help you navigate the complexities of scaling your business, I strongly recommend Olaiya.",
        title: "Founder"
    },
    {
        name: "Rahmatullahi Sanusi",
        quote: "If you're a Muslim Entrepreneur feeling unsure how to make money through social media without compromising your Deen, Olaiya is that missing piece really...",
        title: "Entrepreneur"
    },
    {
        name: "Hamdallah Rabiu",
        quote: "His strategies for business growth are unique and exceptional. They are practical and easy to follow. Thank you so much for everything so far! I would definitely recommend him to anyone looking for a brand strategist for business growth.",
        title: "Business Owner"
    },
    {
        name: "Ajadi Haneefah",
        title: "Team Member",
        quote: "I'm grateful for the opportunity to work under the guidance of Olaiya. His leadership style is truly inspiring, blending professionalism with genuine care for his team... He's a leader who leads by example, and I'm honored to be part of his team."
    },
    {
        name: "Aishat Elusogbon",
        quote: "Of all the things I’ve gained from working with Mr. Olaiya over the years, the one that has truly stayed with me is the value of clarity. He’s helped me see that whether it’s in Islam, business, or personal growth, clarity makes all the difference in moving forward.",
        title: "Client"
    },
    {
        name: "©Nur by Ibtisaam Secret Hub",
        quote: "Sincerely, he will be the first person I have worked with on scaling my brand, and by Allah, using the required steps and following the resources he gave made it easy. If you have been doubting and you are that Muslim brand that wants to gain more halal visibility, this is your go to.",
        title: "Founder"
    }
];

const reviewsBgImage = placeholderData.placeholderImages.find(p => p.id === 'stats-bg');

const Reviews = () => {
    return (
        <MotionWrap>
            <section id="testimonials" className="relative py-24 light:bg-white dark:bg-background overflow-hidden">
                 {reviewsBgImage && (
                    <Image
                        src={reviewsBgImage.imageUrl}
                        alt="Background of a modern office"
                        fill
                        className="object-cover"
                        data-ai-hint={reviewsBgImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="anim d-1 inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
                            <Star className="w-4 h-4" />
                            <span>CLIENT REVIEWS</span>
                        </div>
                        <h2 className="anim d-2 text-4xl sm:text-5xl font-light tracking-tighter mb-4 text-foreground">
                           What People Say about <span className="font-semibold">Olaiya</span>
                        </h2>
                        <p className="anim d-3 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                             We obsess over giving you the best experience but don’t just take our word for it. Hear what people like you are saying.
                        </p>
                    </div>

                    {reviews && reviews.length > 0 ? (
                         <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                  delay: 5000,
                                }),
                            ]}
                            className="w-full max-w-4xl mx-auto anim d-4"
                        >
                            <CarouselContent>
                                {reviews.map((review, index) => (
                                    <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                                        <div className="p-1">
                                            <div className="flex flex-col items-center justify-center text-center p-8">
                                                <Quote className="w-10 h-10 text-primary mb-4" />
                                                <div className="flex items-center gap-1 mb-4">
                                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                                                </div>
                                                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-2xl">
                                                    “{review.quote}”
                                                </p>
                                                <div className="flex items-center gap-4">
                                                    <Avatar>
                                                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-semibold text-foreground">{review.name}</div>
                                                        {review.title && <div className="text-muted-foreground text-sm">{review.title}</div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden md:flex" />
                            <CarouselNext className="hidden md:flex" />
                        </Carousel>
                    ) : (
                        <div className="text-center text-muted-foreground">
                            <p>No testimonials available at the moment. Please check back later.</p>
                        </div>
                    )}


                    <div className="mt-12 text-center anim d-6">
                        <Button asChild size="lg" variant="outline">
                            <Link href="/diary/reviews">
                                Read all success stories <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </MotionWrap>
    );
};

export default Reviews;
