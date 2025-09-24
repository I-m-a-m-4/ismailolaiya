import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const allTestimonials = [
    {
        name: "PlushSteadDécor",
        quote: "I got to know about Olaiya through a friend. It's been close to two months since then and I can say he loves what he does (strategizing) and he really knows his onions. He is also big on client quality work. Some of the many valuable takeaways from my sessions with Olaiya was making sure I know my ideal customers, clear messaging, learning how to bring out services from my products and vice versa and also wrapping my offers in a relatable and compelling experience. This new perspective opened my eyes to various aspects of my business and revenue models I hadn't considered or paid attention to before. Working with Olaiya has been a game-changer for my business and I'm pleased with the progress we've made so far. If you're looking for a deen-conscious business strategist who can help you navigate the complexities of scaling your business, I strongly recommend Olaiya."
    },
    {
        name: "Rahmatullahi Sanusi",
        quote: "Mr. Olaiya is an eyeopener on marketing, content strategy, business strategy. I joined one of his free masterclasses where I learnt what a Muslim Entrepreneur should look like. I begin to see business, not just where I make money but as an act of ‘ibaadah. If you're a Muslim Entrepreneur feeling unsure how to make money through social media without compromising your Deen, Olaiya is that missing piece really..."
    },
    {
        name: "Hamdallah Rabiu",
        quote: "Working with Mr Olaiya is definitely one of the best gifts I got this year. Before now, I knew little about brand strategy and contents that work. But barely 3 months of working together, a lot of things have changed. Also, his strategies for business growth are unique and exceptional. They are practical and easy to follow. Thank you so much for everything so far! I would definitely recommend him to anyone looking for a brand strategist for business growth. Especially Muslims that really care about not going beyond Allāh's boundaries in their business. Baarokallohu feek."
    },
    {
        name: "Ajadi Haneefah",
        quote: "I'm grateful for the opportunity to work under the guidance of Olaiya. His leadership style is truly inspiring, blending professionalism with genuine care for his team. As a team member, I've witnessed firsthand his commitment to nurturing talent and fostering growth. He takes a personal interest in each team member's development, offering valuable insights and support. What sets him apart is his emphasis on excellence and being premium in every aspect. His passion for Islamic values shines through in his business approach, creating a positive and productive work environment. Olaiya's dedication to his clients is impressive, but equally remarkable is his concern for the well-being and success of those around him. He's a leader who leads by example, and I'm honored to be part of his team."
    },
    {
        name: "Aishat Elusogbon",
        quote: "Of all the things I’ve gained from working with Mr. Olaiya over the years, the one that has truly stayed with me is the value of clarity. He’s helped me see that whether it’s in Islam, business, or personal growth, clarity makes all the difference in moving forward."
    },
    {
        name: "©Nur by Ibtisaam Secret Hub",
        quote: "Olaiya is someone that I will always be glad to work with, because why not? He has the charisma of helping MUSLIM brands grow beyond imagination, get halal visibility, and at the same time, move closer to their Creator. Sincerely, he will be the first person I have worked with on scaling my brand, and by Allah, using the required steps and following the resources he gave made it easy. If you have been doubting and you are that Muslim brand that wants to gain more halal visibility and at the same time gain reward from Almighty Allah, this is your go to"
    },
    {
        name: "Zainab Abdulakeem",
        title: "SEO copywriter and Marketing strategist",
        quote: "He’s not just a leader but a true guide—compassionate, honest, and always sticking to Islamic values in his branding and marketing. His strategies work because they come from a place of integrity and care, not shortcuts or hype. Honestly, he was the sabab Allah used to light my way when I was lost, and now I’m thriving as a copywriter and marketing strategist. Thanks to his influence."
    },
    {
        name: "Oyebode Ismatu-llah Titilope",
        quote: "At first, I doubted whether building authority was even possible for me. I wasn’t sure I had what it takes to stand out in such a crowded space. However, the Scale with Olaiya framework provided me with a clear, step-by-step process that replaced confusion with clarity and confidence. Today, I am no longer just another professional online. I am recognized as a trusted authority in my field. This transformation has been invaluable, and I am truly grateful to the Olaiya’s team"
    },
    {
        name: "Bello Phariat",
        quote: "He’s really easy to work with and very sharp when it comes to marketing. The way he analyzes trends, explains what type of content works best, and studies creator's pages to see what’s working in a niche is unmatched. He knows how to build authority in one’s business and outlines the strategies that fit a brand’s content perfectly. He also reminds us that you don’t need to neglect your Deen to succeed, Allahuma barik. Truly sharp and humble."
    },
    {
        name: "Aminah Agbaje KoiKi",
        title: "Founder, SCCENTAURA",
        quote: "Learning from him has been nothing short of amazing. Starting from the free 10 days masterclass he held which was full of high values back-to-back to me getting the halal visibility strategy and business model. I'm getting to now have more clarity about my business and my eyes are now opened to better ways my business can scale in the halal way without compromising my deen. Thank you for being a person full of values Jazakumullah khayran sir🎉🎉🎉"
    },
    {
        name: "ALAAN DIGITALS",
        quote: "All praise and adoration be to Allah. Let me start by saying Alhamdulilah. Alhamdulilah our path crossed. It's one thing to meet people, it's another to gain a lot from them. Mr. Olaiya is a good mentor, brother, father, boss, leader and lots more. He is a man of vision and purpose. He says it and he does it with Allah's help. He isn't a greedy person; he wants everyone around him to grow with him—something I really respect him for. I have learnt a lot of things that even coaches have paid for haven't shared with me. And I am still amazed that people like this still exist—where they share value, that screams value all the way. Mr Olaiya knows what he is doing there is no doubt and I don't regret meeting him. Thanks for all you do Olaiya. Only Allah can reward you in bounty."
    },
    {
        name: "Kelani Monsuroh",
        quote: "I’m truly speechless right now. Ismail Olaiya, the premium brand—thank you so much. When I first heard about his business strategy, which focused primarily on Muslims, I was quite skeptical. But he has shown us that, as Muslims, we can actually achieve far beyond that. His brand is not just a business; it is also a means of elevating the Ummah. May Almighty Allah continue to guide him, bless him, and strengthen him beyond measures."
    },
    {
        name: "Kaosarat Azeez",
        quote: "Mr. Olaiya helps Muslims scale up their businesses the halal way. A well known business and growth strategist that knows his onion. He has helped Muslim brands upscale their businesses, without compromising their Deen. Not only that, apart from being a business strategist, he's a wonderful man and a man of his words. His zeal for success is second to none. He has helped me from knowing the right name to choose for my brand to knowing how to position my brand as a premium brand out there without compromising my deen. Working with him has brought about many positive changes, not only for my brand but also in the way I see life from a broader perspective. I never regretted knowing him and I'm sure you will say the same."
    },
    {
        name: "Toriqatullah Sanni",
        quote: "Scale with Olaiya is the definition of exceptional. As a team member, I used to view visibility and growing of brand as a thing of luck but with Olaiya’s marketing strategy, focus, and Allah's will, positioning your brand exceptionally will become exceptionally easier."
    },
    {
        name: "Peritus Engineering",
        quote: "I have been really impressed by the works of Olaiya. He stands out."
    },
    {
        name: "©ABDULHAMID MUNIRAT",
        quote: "Scale with Olaiya has been instrumental in boosting my passion for being an outstanding Muslim entrepreneur. Through his masterclass and exceptional knowledge sharing, I've learnt how to scale my brand without compromising Islamic worth and my worth."
    }
];

const TestimonialsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <section id="testimonials-full" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-3xl text-center">
                  <h1 className="text-3xl tracking-tight font-semibold anim d-0">What People Say about Olaiya</h1>
                  <p className="mt-3 text-muted-foreground anim d-1">See how real stories and results from clients reflect the impact of expert guidance.</p>
                </header>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {allTestimonials.map((testimonial, index) => (
                    <article key={index} className={`rounded-xl glass-card p-6 hover:bg-white/20 dark:hover:bg-white/10 transition anim d-${index % 7}`}>
                        <div className="flex items-center gap-3">
                            <Avatar className="ring-2 ring-background">
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium">{testimonial.name}</p>
                                {testimonial.title && <p className="text-xs text-muted-foreground">{testimonial.title}</p>}
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">“{testimonial.quote}”</p>
                    </article>
                  ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
