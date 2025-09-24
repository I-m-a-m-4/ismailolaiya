import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What kind of clients do you typically work with?",
        answer: "I primarily work with Muslim entrepreneurs, business leaders, and organizations who are looking to grow their ventures while staying true to Islamic principles. My goal is to help them achieve clarity, structure, and long-term success."
    },
    {
        question: "What is 'Pro-Islamic business strategy'?",
        answer: "It's an approach that integrates the timeless ethics and principles of Islam into modern business practices. This means focusing on fairness, integrity, community benefit, and long-term vision to build enterprises that are not only profitable but also pleasing to Allah."
    },
    {
        question: "Are your mentorship sessions only for businesses, or can individuals benefit too?",
        answer: "While many of my clients are business owners, my mentorship is also designed for individuals at a professional crossroads. Whether you're a student preparing for your career or a professional seeking growth, I provide strategies to help you monetize your expertise and build a strong personal brand."
    },
    {
        question: "How should I prepare for a mentorship session with you?",
        answer: "To make the most of our time, I recommend coming prepared with specific questions and challenges you're facing. Sharing any relevant documents, like business plans or performance metrics, beforehand is also incredibly helpful so I can dive right into providing tailored solutions."
    },
     {
        question: "What makes your approach different from other business strategists?",
        answer: "My methodology is uniquely grounded in an Islamic worldview. I combine modern business growth strategies with timeless principles from the Qur'an and Sunnah. The focus is not just on financial success, but on building a legacy that aligns with our ultimate purpose as Muslims."
    },
]

const Faq = () => {
    return (
        <section id="faq" className="py-20" style={{'--animation-delay': '0.5s'} as React.CSSProperties}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl tracking-tight font-semibold">Questions, answered</h2>
                    <p className="mt-3 text-muted-foreground">If you can’t find what you’re looking for, we’re a message away.</p>
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
