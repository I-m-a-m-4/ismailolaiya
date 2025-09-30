'use client';
import { useState } from 'react';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { type Product } from '@/lib/products';
import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';
import { useToast } from '@/hooks/use-toast';

export default function ShopPageClient({ products }: { products: Product[] }) {
    const { addItem } = useShoppingCart();
    const { toast } = useToast();

    const handleAddToCart = (product: Product) => {
        const productToAdd = {
            name: product.name,
            description: product.description,
            id: product.slug,
            price: product.price,
            currency: 'USD',
            image: placeholderData.placeholderImages.find(p => p.id === product.imageId)?.imageUrl,
        };
        addItem(productToAdd);
        toast({
            title: `${product.name} added to cart!`,
        });
    };

    return (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => {
                const productImage = placeholderData.placeholderImages.find(p => p.id === product.imageId);
                return (
                <article key={product.id} className={`group glass-card overflow-hidden flex flex-col anim d-${index + 2}`}>
                        <Link href={`/shop/${product.slug}`} className="block">
                        {productImage && (
                            <div className="aspect-[3/4] relative">
                                <Image
                                    src={productImage.imageUrl}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    data-ai-hint={productImage.imageHint}
                                />
                            </div>
                        )}
                    </Link>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg tracking-tight font-medium">
                            <Link href={`/shop/${product.slug}`} className="hover:text-primary transition">{product.name}</Link>
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground flex-grow line-clamp-2">{product.description}</p>
                        <div className="mt-6 flex justify-between items-center">
                            <p className="text-xl font-semibold tracking-tight">${(product.price/100).toFixed(2)}</p>
                            <Button onClick={() => handleAddToCart(product)} size="icon" variant="outline">
                                <ShoppingCart className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </article>
            )})}
        </div>
    );
}
