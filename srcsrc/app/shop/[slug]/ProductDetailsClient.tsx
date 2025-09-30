
'use client';
import { Button } from "@/components/ui/button";
import { type Product } from "@/lib/products";
import placeholderData from '@/lib/placeholder-images.json';
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetailsClient({ product }: { product: Product }) {
    const productImage = placeholderData.placeholderImages.find(p => p.id === product.imageId);
    const { addItem } = useShoppingCart();
    const { toast } = useToast();

    const handleAddToCart = () => {
        const productToAdd = {
            name: product.name,
            description: product.description,
            id: product.slug,
            price: product.price,
            currency: 'USD',
            image: productImage?.imageUrl,
        };
        addItem(productToAdd);
        toast({
            title: `${product.name} added to cart!`,
        });
    };

    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    <div className="aspect-[3/4] relative rounded-2xl glass-card overflow-hidden shadow-lg">
                         {productImage && (
                            <Image
                                src={productImage.imageUrl}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                data-ai-hint={productImage.imageHint}
                                priority
                            />
                        )}
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">{product.name}</h1>
                        <div className="flex items-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                            <span className="text-sm text-muted-foreground ml-2">(12 reviews)</span>
                        </div>
                        <p className="text-3xl font-bold tracking-tight text-primary mb-6">${(product.price / 100).toFixed(2)}</p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{product.description}</p>
                        <div className="flex items-center gap-4">
                            <Button size="lg" onClick={handleAddToCart}>
                                <ShoppingCart className="mr-2" />
                                Add to Cart
                            </Button>
                        </div>

                         <div className="mt-12 p-6 rounded-2xl glass-card bg-secondary/30">
                            <h3 className="font-semibold text-lg mb-2">Why you'll love this book:</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                                <li>Actionable strategies you can implement today.</li>
                                <li>Rooted in Islamic principles for Deen-aligned growth.</li>
                                <li>Written by a practicing business strategist.</li>
                                <li>Easy to read, hard to put down.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
