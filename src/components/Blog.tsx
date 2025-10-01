'use client';

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { type BlogPost } from "@/lib/blog-posts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { getAllPosts } from "@/lib/blog-posts";
import MotionWrap from "./MotionWrap";

const Blog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const fetchedPosts = await getAllPosts();
            setPosts(fetchedPosts.slice(0, 3)); // Only show latest 3
            setLoading(false);
        };
        fetchPosts();
    }, []);

    return (
        <MotionWrap>
            <section id="blog" className="py-20" style={{'--animation-delay': '0.9s'} as React.CSSProperties}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">My Blog</h2>
                        <p className="mt-3 text-muted-foreground">A personal space where I share insights, stories, and ideas on topics that inspire and inform.</p>
                    </header>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {loading ? (
                            Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="space-y-4">
                                    <Skeleton className="h-48 w-full rounded-lg" />
                                    <Skeleton className="h-6 w-3/4" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-1/2" />
                            </div>
                            ))
                        ) : (
                            posts.map((post, index) => (
                                <article key={post.slug} className={`group relative flex flex-col rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:scale-105 hover:shadow-2xl anim d-${index + 2}`}>
                                    {post.imageUrl && (
                                        <div className="aspect-video relative overflow-hidden">
                                            <Link href={`/blog/${post.slug}`}>
                                                <Image
                                                    src={post.imageUrl}
                                                    fill
                                                    alt={post.title}
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                            </Link>
                                        </div>
                                    )}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-lg tracking-tight font-medium text-foreground flex-grow">
                                            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition line-clamp-2">{post.title}</Link>
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{post.description}</p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-xs text-muted-foreground">{post.date}</span>
                                            <Link href={`/blog/${post.slug}`} className="flex items-center text-sm font-medium text-primary hover:text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity">
                                                Read More <ArrowRight className="h-4 w-4 ml-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </MotionWrap>
    );
};

export default Blog;
