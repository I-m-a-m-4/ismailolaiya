
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Users, X } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing & Mentorship Packages | Scale with Olaiya',
    description: 'Explore mentorship pricing for one-on-one and team sessions with Ismail Adekunle-Olaiya. Compare packages and book a session with a leading Pro-Islamic business strategist.',
    keywords: ['business mentorship pricing', 'business consultant fees', 'growth strategist cost', 'team mentorship package', 'Ismail Adekunle-Olaiya pricing'],
};


const features = [
  { name: 'Duration', inPerson: '60-90 mins', virtual: '60 mins', team: 'Half or Full Day' },
  { name: 'Format', inPerson: 'Face-to-Face', virtual: 'Google Meet', team: 'In-Person/Virtual' },
  { name: 'Tailored Action Plan', inPerson: true, virtual: true, team: true },
  { name: 'Blind Spot Identification', inPerson: true, virtual: true, team: true },
  { name: 'Hidden Opportunity Exposure', inPerson: true, virtual: true, team: false },
  { name: 'Leadership & Mindset Coaching', inPerson: false, virtual: false, team: true },
  { name: 'Group-focused Strategy', inPerson: false, virtual: false, team: true },
  { name: 'Confidentiality', inPerson: true, virtual: true, team: true },
];

const PricingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <section id="pricing" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-4xl text-center">
                  <h1 className="text-4xl md:text-5xl font-semibold tracking-tight anim d-0">Mentorship Pricing</h1>
                  <p className="mt-4 text-xl text-muted-foreground anim d-1">Find the right mentorship package to unlock your potential. Transparent pricing from a trusted business consultant for Muslims.</p>
                </header>

                <div className="mt-16 overflow-x-auto anim d-2">
                    <div className="min-w-full">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="text-left p-4 font-semibold w-1/4">Features</th>
                                    <th className="text-center p-4 font-semibold w-1/4 border-l border-border">
                                        <p className="text-lg">In-Person One-on-One</p>
                                        <p className="text-2xl font-bold tracking-tight">$449.99</p>
                                    </th>
                                    <th className="text-center p-4 font-semibold w-1/4 border-l border-primary bg-primary/5">
                                        <p className="text-lg text-primary">Virtual One-on-One</p>
                                        <p className="text-2xl font-bold tracking-tight">$139.99</p>
                                    </th>
                                    <th className="text-center p-4 font-semibold w-1/4 border-l border-border">
                                        <p className="text-lg">Team & Corporate</p>
                                        <p className="text-2xl font-bold tracking-tight">$600+</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {features.map((feature) => (
                                <tr key={feature.name}>
                                    <td className="p-4 font-medium">{feature.name}</td>
                                    <td className="p-4 text-center border-l border-border">
                                        {typeof feature.inPerson === 'boolean' ? (
                                            feature.inPerson ? <Check className="mx-auto text-green-500" /> : <X className="mx-auto text-muted-foreground" />
                                        ) : (
                                            feature.inPerson
                                        )}
                                    </td>
                                    <td className="p-4 text-center border-l border-primary bg-primary/5">
                                        {typeof feature.virtual === 'boolean' ? (
                                            feature.virtual ? <Check className="mx-auto text-green-500" /> : <X className="mx-auto text-muted-foreground" />
                                        ) : (
                                            feature.virtual
                                        )}
                                    </td>
                                    <td className="p-4 text-center border-l border-border">
                                        {typeof feature.team === 'boolean' ? (
                                            feature.team ? <Check className="mx-auto text-green-500" /> : <X className="mx-auto text-muted-foreground" />
                                        ) : (
                                            feature.team
                                        )}
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                             <tfoot>
                                <tr>
                                    <td></td>
                                    <td className="p-4 text-center border-l border-border">
                                        <Button asChild className="w-full">
                                            <Link href="/#contact">Book Now</Link>
                                        </Button>
                                    </td>
                                    <td className="p-4 text-center border-l border-primary bg-primary/5">
                                         <Button asChild className="w-full">
                                            <Link href="/#contact">Book Now</Link>
                                        </Button>
                                    </td>
                                    <td className="p-4 text-center border-l border-border">
                                        <Button asChild className="w-full">
                                            <Link href="/#contact">Enquire Now</Link>
                                        </Button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <div className="mt-12 text-center anim d-3">
                    <p className="text-muted-foreground">Prices are subject to change. For bespoke packages or detailed corporate quotes, please get in touch.</p>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
