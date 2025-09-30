'use client';

import { useState, useEffect } from 'react';
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
import { type BlogPost } from '@/lib/blog-posts';

const postSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  imageId: z.string().min(1, 'Image ID is required'),
  author: z.string().min(1, 'Author is required'),
  date: z.string().min(1, 'Date is required'),
  content: z.string().min(1, 'Content is required'),
  slug: z.string().optional(),
});

type PostFormValues = z.infer<typeof postSchema>;

interface PostEditorProps {
  post?: BlogPost | null;
  onSave: () => void;
}

const PostEditor = ({ post, onSave }: PostEditorProps) => {
  const { toast } = useToast();
  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: post || {
      title: '',
      description: '',
      imageId: '',
      author: 'Ismail Adekunle-Olaiya',
      date: new Date().toISOString().split('T')[0],
      content: '',
    },
  });

  useEffect(() => {
    if (post) {
      form.reset(post);
    } else {
      form.reset({
        title: '',
        description: '',
        imageId: '',
        author: 'Ismail Adekunle-Olaiya',
        date: new Date().toISOString().split('T')[0],
        content: '',
      });
    }
  }, [post, form]);
  
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const onSubmit = async (data: PostFormValues) => {
    try {
      const slug = data.slug || generateSlug(data.title);
      const postRef = doc(db, 'blogPosts', slug);
      
      const postData = {
          ...data,
          slug,
          createdAt: serverTimestamp()
      }

      await setDoc(postRef, postData, { merge: true });

      toast({
        title: 'Success',
        description: `Post "${data.title}" has been ${post ? 'updated' : 'created'}.`,
      });
      onSave();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save post.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-h-[70vh] overflow-y-auto p-1">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
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
                <Input {...field} placeholder="auto-generated-from-title" />
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
        <div className="grid grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                    <Input {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                    <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content (HTML)</FormLabel>
              <FormControl>
                <Textarea {...field} rows={15} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{post ? 'Update' : 'Create'} Post</Button>
      </form>
    </Form>
  );
};

export default PostEditor;
