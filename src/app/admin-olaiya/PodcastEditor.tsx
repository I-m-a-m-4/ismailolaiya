'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { type Podcast } from '@/lib/podcasts';
import { db } from '@/lib/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

const podcastSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  artist: z.string().min(1, 'Artist is required'),
  album: z.string().min(1, 'Album is required'),
  year: z.string().min(4, 'Year is required'),
  duration: z.string().min(1, 'Duration is required'),
  imageId: z.string().min(1, 'Image ID is required'),
  audioSrc: z.string().url('Must be a valid URL'),
  slug: z.string().optional(),
  releaseDate: z.string().min(1, 'Release date is required'),
});

type PodcastFormValues = z.infer<typeof podcastSchema>;

interface PodcastEditorProps {
  podcast?: Podcast | null;
  onSave: () => void;
}

const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
};

const PodcastEditor = ({ podcast, onSave }: PodcastEditorProps) => {
  const { toast } = useToast();
  const form = useForm<PodcastFormValues>({
    resolver: zodResolver(podcastSchema),
    defaultValues: podcast || {
      title: '',
      artist: 'Ismail Adekunle-Olaiya',
      album: 'Scale with Olaiya',
      year: new Date().getFullYear().toString(),
      duration: '00:00',
      imageId: '',
      audioSrc: '',
      releaseDate: new Date().toISOString().split('T')[0],
    },
  });

  const onSubmit = async (data: PodcastFormValues) => {
     try {
      const slug = data.slug || generateSlug(data.title);
      const podcastRef = doc(db, 'podcasts', slug);
      
      const podcastData = {
          ...data,
          slug,
          // These fields are part of the Podcast type but not the form, so we add defaults.
          id: podcast?.id || Date.now(),
          plays: podcast?.plays || "0",
          rating: podcast?.rating || "0.0★",
          artistAvatar: podcast?.artistAvatar || 'IA',
          tags: podcast?.tags || [],
          waveform: podcast?.waveform || Array(22).fill(10).map((h, i) => h + Math.floor(Math.random() * 54)),
          createdAt: serverTimestamp()
      }

      await setDoc(podcastRef, podcastData, { merge: true });

      toast({
        title: 'Success',
        description: `Podcast "${data.title}" has been ${podcast ? 'updated' : 'created'}.`,
      });
      onSave();
    } catch (error) {
      console.error("Failed to save podcast:", error);
      toast({
        title: 'Error',
        description: 'Failed to save podcast.',
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
              <FormControl><Input {...field} /></FormControl>
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
              <FormControl><Input {...field} placeholder="auto-generated-from-title" /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
            <FormField control={form.control} name="artist" render={({ field }) => (<FormItem><FormLabel>Artist</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="album" render={({ field }) => (<FormItem><FormLabel>Album</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <FormField control={form.control} name="year" render={({ field }) => (<FormItem><FormLabel>Year</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="duration" render={({ field }) => (<FormItem><FormLabel>Duration</FormLabel><FormControl><Input {...field} placeholder="e.g., 25:12" /></FormControl><FormMessage /></FormItem>)} />
        </div>
        <FormField control={form.control} name="imageId" render={({ field }) => (<FormItem><FormLabel>Image ID</FormLabel><FormControl><Input {...field} placeholder="From placeholder-images.json" /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="audioSrc" render={({ field }) => (<FormItem><FormLabel>Audio URL</FormLabel><FormControl><Input {...field} placeholder="https://example.com/audio.mp3" /></FormControl><FormMessage /></FormItem>)} />
         <FormField
            control={form.control}
            name="releaseDate"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Release Date</FormLabel>
                <FormControl>
                    <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

        <Button type="submit">{podcast ? 'Update' : 'Create'} Podcast</Button>
      </form>
    </Form>
  );
};

export default PodcastEditor;
