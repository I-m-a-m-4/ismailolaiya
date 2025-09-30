'use client'

import { Button } from "@/components/ui/button";
import { Check, Users } from "lucide-react";
import BookingForm from "./BookingForm";
import { Dialog, DialogTrigger } from "./ui/dialog";
import Link from "next/link";
import MotionWrap from "./MotionWrap";

const Mentorship = () => {
    return (
        <MotionWrap>
            <section id="mentorship" className="py-20" style={{ '--animation-delay': '0.6s' } as React.CSSProperties}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="text-center mb-12 max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Book a One-on-One with a Growth Strategist</h2>
                        <p className="mt-2 text-lg text-muted-foreground">Get expert mentorship from a Pro-Islamic Business Strategist and Consultant.</p>
                    </header>

                    <Dialog>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                            <article className="md:col-span-1 glass-card p-6 anim d-2 rounded-2xl">
                                <h3 className="text-xl font-semibold">Why Work With a Business Strategist?</h3>
                                <ul className="mt-4 space-y-4 text-muted-foreground">
                                    <li>
                                        <h4 className="font-semibold text-foreground">World-Class Expertise</h4>
                                        <p className="text-sm">Learn from a business consultant with proven success across multiple industries.</p>
                                    </li>
                                    <li>
                                        <h4 className="font-semibold text-foreground">Tailored for You</h4>
                                        <p className="text-sm">Every session is customized to your business challenges by an expert brand strategist.</p>
                                    </li>
                                    <li>
                                        <h4 className="font-semibold text-foreground">Action-Oriented</h4>
                                        <p className="text-sm">Walk away with practical strategies you can implement immediately.</p>
                                    </li>
                                </ul>
                            </article>

                            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <article className="border-2 border-primary/50 bg-primary/5 glass-card p-6 anim d-3 relative rounded-2xl">
                                    <div className="absolute -top-3 right-4 bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary ring-1 ring-primary/20">In-Person</div>
                                    <h3 className="text-lg tracking-tight font-medium">One-on-One Business Consultant Session</h3>
                                    <p className="mt-1 text-3xl tracking-tight font-semibold">$449.99</p>
                                    <p className="text-sm text-muted-foreground mt-1">60–90 minutes</p>
                                    <p className="text-sm text-foreground/80 mt-4">This isn’t another casual chat—it’s a focused session with a growth strategist designed to create a clear roadmap.</p>
                                    <ul className="mt-4 space-y-2 text-sm">
                                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Identify blind spots</li>
                                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Expose hidden opportunities</li>
                                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Map out clear next steps</li>
                                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Leave with a tailored action plan</li>
                                    </ul>
                                    <DialogTrigger asChild>
                                        <Button className="mt-5 w-full bg-primary text-primary-foreground hover:bg-primary/90">Book Session</Button>
                                    </DialogTrigger>
                                </article>
                                <article className="glass-card p-6 anim d-4 relative rounded-2xl">
                                    <div className="absolute -top-3 right-4 bg-sky-400/10 px-2 py-1 text-[10px] font-medium text-sky-300 ring-1 ring-sky-400/20">Virtual</div>
                                    <h3 className="text-lg tracking-tight font-medium">Virtual Business Consultant Session</h3>
                                    <p className="mt-1 text-3xl tracking-tight font-semibold">$139.99</p>
                                    <p className="text-sm text-muted-foreground mt-1">60 minutes (Google Meet)</p>
                                    <p className="text-sm text-foreground/80 mt-4">All the same benefits of in-person mentorship—delivered conveniently online by your business strategist.</p>
                                    <p className="text-sm font-semibold mt-4">Perfect for: Global Muslim entrepreneurs and busy professionals.</p>
                                    <DialogTrigger asChild>
                                        <Button variant="secondary" className="mt-5 w-full">Book Session</Button>
                                    </DialogTrigger>
                                </article>
                            </div>
                        </div>

                        <article className="max-w-6xl mx-auto mt-12 text-center glass-card p-8 anim d-5 rounded-2xl">
                            <h3 className="text-xl font-semibold">How to Prepare & Important Information</h3>
                            <div className="grid md:grid-cols-3 gap-6 mt-6 text-left">
                                <div>
                                    <h4 className="font-semibold">Share in Advance</h4>
                                    <p className="text-sm text-muted-foreground mt-1">Share materials in advance (business plans, metrics, etc.).</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Come Prepared</h4>
                                    <p className="text-sm text-muted-foreground mt-1">Come with focused questions you want solved.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Be Ready to Act</h4>
                                    <p className="text-sm text-muted-foreground mt-1">Be ready to take action—clarity only works if you implement it.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Rescheduling</h4>
                                    <p className="text-sm text-muted-foreground mt-1">We’ll help you find another slot if needed (no refunds).</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Confidentiality</h4>
                                    <p className="text-sm text-muted-foreground mt-1">Your session is 100% private.</p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <DialogTrigger asChild>
                                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book Your Business Strategy Session Now</Button>
                                </DialogTrigger>
                            </div>
                        </article>
                        <BookingForm />
                    </Dialog>

                    <div className="mt-20 border-t border-border pt-20">
                        <header className="text-center mb-12 max-w-3xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Team & Corporate Mentorship</h2>
                            <p className="mt-2 text-lg text-muted-foreground">Empower your entire team with strategic clarity and a growth mindset.</p>
                        </header>
                        <article className="relative border-2 border-primary/30 bg-primary/5 p-8 max-w-4xl mx-auto anim d-1 rounded-2xl glass-card">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-3 mb-4">
                                        <div className="p-3 bg-primary/10 ring-1 ring-primary/20">
                                            <Users className="size-6 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-semibold">Team Mentorship</h3>
                                    </div>
                                    <p className="text-muted-foreground mb-6">
                                        Tailored for startups, SMEs, and corporate teams seeking to align their objectives with proven growth strategies. This session focuses on group dynamics, leadership, and actionable frameworks to elevate your entire organization.
                                    </p>
                                    <ul className="space-y-2 text-sm mb-6">
                                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Group-focused Strategy & Alignment</li>
                                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Leadership & Mindset Coaching</li>
                                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Custom Action Plan for Your Team</li>
                                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Half-Day & Full-Day Workshops Available</li>
                                    </ul>
                                    <Button size="lg" asChild>
                                        <Link href="#contact">Enquire About Team Sessions</Link>
                                    </Button>
                                </div>
                                <div className="hidden md:block">
                                    <div className="text-center bg-background/30 p-8 rounded-xl">
                                        <p className="text-lg text-muted-foreground">Starting from</p>
                                        <p className="text-5xl font-bold tracking-tighter text-foreground my-2">$1,200</p>
                                        <p className="text-muted-foreground">for a half-day session</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </MotionWrap>
    );
};

export default Mentorship;
