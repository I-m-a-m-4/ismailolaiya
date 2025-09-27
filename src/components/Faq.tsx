import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What kind of clients do you work with as a business strategist?",
        answer: "As a business strategist for Muslims, I primarily work with entrepreneurs, leaders, and organizations aiming to grow their ventures on Islamic principles. My clients range from startups to established enterprises seeking clarity and long-term success."
    },
    {
        question: "What is a 'Pro-Islamic business consultant'?",
        answer: "A Pro-Islamic business consultant integrates timeless Islamic ethics into modern business practices. This approach, which I use as a growth strategist, focuses on fairness, integrity, and community benefit to build enterprises that are not only profitable but also pleasing to Allah."
    },
    {
        question: "Are your mentorship sessions only for businesses?",
        answer: "While many of my clients are business owners seeking a business developer, my mentorship is also for individuals. Whether you're a student or a professional, I provide brand strategist insights to help you monetize your expertise and build a strong, authentic personal brand."
    },
    {
        question: "How do I prepare for a session with a growth strategist?",
        answer: "To maximize our time, come prepared with specific challenges you're facing. Sharing business plans or metrics beforehand helps me, as your business consultant, dive right into providing tailored, actionable solutions."
    },
     {
        question: "What makes your approach different from other business strategists?",
        answer: "My methodology is uniquely grounded in an Islamic worldview. I combine modern growth strategies with timeless principles from the Qur'an and Sunnah. The focus is not just on financial success, but on building a legacy that aligns with our ultimate purpose as Muslims."
    },
]

const Faq = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section id="faq" className="py-20" style={{'--animation-delay': '0.5s'} as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl tracking-tight font-semibold">Questions for Your Business Consultant</h2>
                    <p className="mt-3 text-muted-foreground">Find answers below. If you can’t find what you’re looking for, we’re a message away.</p>
                </header>
                <div className="mt-10 grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
                   {faqs.map((faq, index) => (
                     <details key={index} className={`rounded-lg glass-card p-5 anim d-${index + 2}`}>
                        <summary className="cursor-pointer list-none text-sm font-medium hover:text-foreground text-foreground/80 flex items-center justify-between">
                            {faq.question}
                            <ChevronDown className="size-4 transition-transform duration-300 open:rotate-180" />
                        </summary>
                        <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
                     </details>
                   ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
