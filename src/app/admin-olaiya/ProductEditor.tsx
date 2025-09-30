
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { db } from '@/lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { type Product } from '@/lib/products';

const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(0, 'Price must be a positive number'),
  imageId: z.string().min(1, 'Image ID is required'),
  slug: z.string().optional(),
});

type ProductFormValues = z.infer<typeof productSchema>;

interface ProductEditorProps {
  product?: Product | null;
  onSave: () => void;
}

const ProductEditor = ({ product, onSave }: ProductEditorProps) => {
  const { toast } = useToast();
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: product ? { ...product, price: product.price / 100 } : {
      name: '',
      description: '',
      price: 0,
      imageId: '',
      slug: '',
    },
  });

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const onSubmit = async (data: ProductFormValues) => {
    try {
      const slug = data.slug || generateSlug(data.name);
      const productRef = doc(db, 'products', slug);
      
      const productData = {
          ...data,
          price: Math.round(data.price * 100), // Store price in cents
          slug,
          createdAt: serverTimestamp()
      }

      await setDoc(productRef, productData, { merge: true });

      toast({
        title: 'Success',
        description: `Product "${data.name}" has been ${product ? 'updated' : 'created'}.`,
      });
      onSave();
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to save product.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-h-[70vh] overflow-y-auto p-1">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug (optional)</FormLabel>
              <FormControl>
                <Input {...field} placeholder="auto-generated-from-name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price (in dollars)</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image ID</FormLabel>
              <FormControl>
                <Input {...field} placeholder="From placeholder-images.json" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{product ? 'Update' : 'Create'} Product</Button>
      </form>
    </Form>
  );
};

export default ProductEditor;
