import { ArrowRight } from "lucide-react";
import Image from "next/image";
import placeholderData from '@/lib/placeholder-images.json';

const blogPosts = [
    {
        title: "The Science of Hadith and Modern Business",
        description: "Exploring the parallels between the precision of 'Ilm Rijaal and strategic business thinking.",
        link: "#",
        imageId: "blog1"
    },
    {
        title: "Why I Don't Keep Casual Friends",
        description: "On building deep, meaningful connections that align with a life of purpose and faith.",
        link: "#",
        imageId: "blog2"
    },
    {
        title: "From Employee to Entrepreneur: My Journey",
        description: "How 'The Millionaire Fastlane' shifted my perspective on ownership and problem-solving.",
        link: "#",
        imageId: "blog3"
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-20" style={{'--animation-delay': '0.9s'} as React.CSSProperties}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">My Blog</h2>
                    <p className="mt-3 text-muted-foreground">A personal space where I share insights, stories, and ideas.</p>
                </header>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {blogPosts.map((post, index) => {
                        const postImage = placeholderData.placeholderImages.find(p => p.id === post.imageId);
                        return (
                        <article key={post.title} className={`group rounded-xl glass-card p-4 hover:bg-white/10 transition anim d-${index + 2}`}>
                           {postImage && (
                             <div className="aspect-video relative overflow-hidden rounded-lg">
                                <Image 
                                  src={postImage.imageUrl} 
                                  layout="fill" 
                                  objectFit="cover" 
                                  alt={post.title} 
                                  data-ai-hint={postImage.imageHint} 
                                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  />
                             </div>
                           )}
                           <h3 className="text-lg tracking-tight font-medium mt-4">{post.title}</h3>
                           <p className="mt-2 text-sm text-muted-foreground">{post.description}</p>
                            <a href={post.link} className="flex items-center mt-4 text-sm font-medium text-primary hover:text-primary/80">
                                Read More <ArrowRight className="h-4 w-4 ml-1" />
                            </a>
                        </article>
                    )})}
                </div>
            </div>
        </section>
    );
};

export default Blog;
