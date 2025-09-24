'use client'

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import BookingForm from "./BookingForm";
import { Dialog, DialogTrigger } from "./ui/dialog";

const Mentorship = () => {
    return (
        <section id="mentorship" className="py-20" style={{ '--animation-delay': '0.6s' } as React.CSSProperties}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Book a One-on-One</h2>
                    <p className="mt-2 text-lg text-muted-foreground">Get expert mentorship from a Pro-Islamic Business Strategist.</p>
                </header>

                <Dialog>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                        <article className="md:col-span-1 rounded-2xl glass-card p-6 anim d-2">
                            <h3 className="text-xl font-semibold">Why Work With Me?</h3>
                            <ul className="mt-4 space-y-4 text-muted-foreground">
                                <li>
                                    <h4 className="font-semibold text-foreground">World-Class Expertise</h4>
                                    <p className="text-sm">Learn directly from a strategist with proven success across multiple industries.</p>
                                </li>
                                <li>
                                    <h4 className="font-semibold text-foreground">Tailored for You</h4>
                                    <p className="text-sm">Every session is customized to your business challenges.</p>
                                </li>
                                <li>
                                    <h4 className="font-semibold text-foreground">Action-Oriented</h4>
                                    <p className="text-sm">Walk away with practical strategies you can implement immediately.</p>
                                </li>
                            </ul>
                        </article>

                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <article className="rounded-2xl border-2 border-primary/50 bg-primary/5 glass-card p-6 anim d-3 relative">
                                <div className="absolute -top-3 right-4 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary ring-1 ring-primary/20">In-Person</div>
                                <h3 className="text-lg tracking-tight font-medium">One-on-One Mentorship</h3>
                                <p className="mt-1 text-3xl tracking-tight font-semibold">$449.99</p>
                                <p className="text-sm text-muted-foreground mt-1">60–90 minutes</p>
                                <p className="text-sm text-foreground/80 mt-4">This isn’t another casual chat—it’s a focused strategy session designed to cut through confusion and create a clear roadmap.</p>
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
                            <article className="rounded-2xl glass-card p-6 anim d-4 relative">
                                <div className="absolute -top-3 right-4 rounded-full bg-sky-400/10 px-2 py-1 text-[10px] font-medium text-sky-300 ring-1 ring-sky-400/20">Virtual</div>
                                <h3 className="text-lg tracking-tight font-medium">One-on-One Mentorship</h3>
                                <p className="mt-1 text-3xl tracking-tight font-semibold">$139.99</p>
                                <p className="text-sm text-muted-foreground mt-1">60 minutes (Google Meet)</p>
                                <p className="text-sm text-foreground/80 mt-4">All the same benefits of in-person mentorship—delivered conveniently online, wherever you are.</p>
                                <p className="text-sm font-semibold mt-4">Perfect for: Global Muslim entrepreneurs, busy professionals, or those seeking flexible mentorship.</p>
                                <DialogTrigger asChild>
                                    <Button variant="secondary" className="mt-5 w-full">Book Session</Button>
                                </DialogTrigger>
                            </article>
                        </div>
                    </div>

                    <article className="max-w-6xl mx-auto mt-12 text-center rounded-2xl glass-card p-8 anim d-5">
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
                                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book Your Session Now</Button>
                            </DialogTrigger>
                        </div>
                    </article>
                    <BookingForm />
                </Dialog>
            </div>
        </section>
    );
};

export default Mentorship;
