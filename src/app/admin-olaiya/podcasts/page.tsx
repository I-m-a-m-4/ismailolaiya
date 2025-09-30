'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import PodcastEditor from '../PodcastEditor';
import { type Podcast, getAllPodcasts } from '@/lib/podcasts';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const AdminPodcastsPage = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [editingPodcast, setEditingPodcast] = useState<Podcast | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const { toast } = useToast();

  const fetchPodcasts = async () => {
    const querySnapshot = await getDocs(collection(db, 'podcasts'));
    const podcastsData = querySnapshot.docs.map(doc => ({ ...doc.data(), slug: doc.id } as Podcast));
    podcastsData.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
    setPodcasts(podcastsData);
  };

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const handleEdit = (podcast: Podcast) => {
    setEditingPodcast(podcast);
    setIsEditorOpen(true);
  };

  const handleAddNew = () => {
    setEditingPodcast(null);
    setIsEditorOpen(true);
  };
  
  const handleDelete = async (slug: string) => {
     try {
      await deleteDoc(doc(db, 'podcasts', slug));
      toast({ title: 'Success', description: 'Podcast deleted successfully.' });
      fetchPodcasts();
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete podcast.', variant: 'destructive' });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Podcasts</h1>
        <Button onClick={handleAddNew}><Plus className="mr-2 h-4 w-4" /> Add New Podcast</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {podcasts.map(podcast => {
          const podcastImage = placeholderData.placeholderImages.find(p => p.id === podcast.imageId);
          return (
            <Card key={podcast.slug}>
              {podcastImage && <Image src={podcastImage.imageUrl} alt={podcast.title} width={400} height={400} className="object-cover aspect-square" />}
              <CardHeader>
                <CardTitle className="truncate">{podcast.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{podcast.artist}</p>
                <p className="text-sm text-muted-foreground">{podcast.duration} - {podcast.year}</p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="icon" onClick={() => handleEdit(podcast)}><Edit className='h-4 w-4' /></Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild><Button variant="destructive" size="icon"><Trash2 className='h-4 w-4' /></Button></AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>This will permanently delete the podcast.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDelete(podcast.slug)}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
          )
        })}
      </div>
      
      <Dialog open={isEditorOpen} onOpenChange={setIsEditorOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingPodcast ? 'Edit Podcast' : 'Add New Podcast'}</DialogTitle>
            <DialogDescription>{editingPodcast ? 'Update podcast details.' : 'Add a new podcast.'}</DialogDescription>
          </DialogHeader>
          <PodcastEditor podcast={editingPodcast} onSave={() => { setIsEditorOpen(false); fetchPodcasts(); }} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPodcastsPage;
