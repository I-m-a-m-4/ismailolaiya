import { BrainCircuit, BookOpen, Users, Palette } from 'lucide-react';

const SalafiMan = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 20c0-2.209 1.791-4 4-4s4 1.791 4 4"/>
        <path d="M12 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
        <path d="M12 14v-4"/>
        <path d="M12 8h.01"/>
    </svg>
);


const facts = [
    {
        title: "My favorite color is white",
        description: "Exceptionally white. The clear, outstanding, Halal kind of White. It’s giving clarity, honesty, and a little bit of “I am open-minded.”",
        icon: Palette
    },
    {
        title: "I’ve fallen in love with the Science of Hadith",
        description: "Didn’t see it coming—but here we are. There’s just something about the precision, the intensity, the elegance… and maybe the technicality too. I used to think strategy was my one true calling—but ‘Ilm Rijaal? One of my goals is to become a contemporary muhadith—someone that digs deep into how the prophet, (peace be upon Him) companions, and early Muslims ventured into business successfully without compromising the Deen.",
        icon: BookOpen
    },
    {
        title: "I don’t like keeping casual friends",
        description: "Yeah. You read that right. I’m not into “hi and hello” kinds of relationships, or the unnecessary comparison of achievements that come with these kinds of association. My idea? A very deep connection with those who matter, deep interest to please Allah, and constant effort to become better than the last minute—Abu Sufyan, Abu Ni’mah, Abu Ruqayya, and Abu Daiyan, these are those who can get my attention any day.",
        icon: Users
    },
    {
        title: "My brain never switches off",
        description: "I consume knowledge like it’s oxygen. Books, podcasts, islamic lectures, conversations, even random quotes—my brain connects dots and pulls insights people often miss. Especially with the Quran—what others read, I see. It’s wild. Sometimes I wake up thinking about something I read or watched 24 hours ago... like it’s still unfolding in my mind. The only time it ever slows down is when I’m standing in front of Allah or my wife. So, sometimes my body might be resting but my mind is on overdrive. It's very annoying sometimes but I thank God for that gift.",
        icon: BrainCircuit
    },
    {
        title: "I’m a Salafiy",
        description: "I try my best to stand where the best of mankind stood, I like to sit where he rested, I like to lie exactly where he left his warmth. When he runs, I follow suit. When he remains silent, I shut. When he smiles, I model it. When he frowns, I become angry. His path is the only way to find the pleasure of the creator of the worlds.",
        icon: SalafiMan
    },
    {
        title: "I used to hate being a business owner",
        description: "I never really liked being a boss of my own. I was always more of an excellent team player—compliance, following orders, imparting others selflessly. But one day, I decided to give owning something a try. The Millionaire Fastlane—MJ De Marco. It blew my mind. That book changed everything for me. Since then, I’ve become someone that constantly wants to solve complex problems. For Muslims though. It’s my calling.",
        icon: BrainCircuit
    }
];


const FunFacts = () => {
    return (
        <section id="facts" className="py-20" style={{'--animation-delay': '0.4s'} as React.CSSProperties}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl sm:text-4xl tracking-tight font-semibold anim d-0">Fun Facts About Me</h2>
                    <p className="mt-3 text-muted-foreground anim d-1">A few things you might not know.</p>
                </header>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facts.map((fact, index) => (
                        <article key={index} className={`rounded-xl glass-card p-6 hover:bg-white/20 dark:hover:bg-white/10 transition anim d-${index + 1}`}>
                           <div className="flex items-center gap-3">
                                <div className="rounded-md bg-primary/10 p-2 ring-1 ring-primary/20">
                                   <fact.icon className="size-5 text-primary"/>
                                </div>
                                <h3 className="text-lg tracking-tight font-medium">{fact.title}</h3>
                           </div>
                           <p className="mt-2 text-sm text-muted-foreground">{fact.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FunFacts;
