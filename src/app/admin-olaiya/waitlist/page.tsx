'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Loader2, ListChecks, Download } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

type WaitlistEntry = {
    id: string;
    email: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    } | null;
};

const AdminWaitlistPage = () => {
    const [waitlist, setWaitlist] = useState<WaitlistEntry[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchWaitlist = async () => {
        setLoading(true);
        const waitlistRef = collection(db, 'waitlist');
        const q = query(waitlistRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const waitlistData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as WaitlistEntry));
        setWaitlist(waitlistData);
        setLoading(false);
    };

    useEffect(() => {
        fetchWaitlist();
    }, []);
    
    const downloadCSV = () => {
        const headers = ['Email', 'Date Joined'];
        const rows = waitlist.map(entry => [
            entry.email,
            entry.createdAt ? format(new Date(entry.createdAt.seconds * 1000), 'PPP p') : 'N/A'
        ]);

        let csvContent = "data:text/csv;charset=utf-8," 
            + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
        
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "waitlist_export.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Book Waitlist</h1>
                <Button onClick={downloadCSV} disabled={waitlist.length === 0}>
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Waitlist Submissions</CardTitle>
                    <CardDescription>
                        {loading ? 'Loading...' : `A total of ${waitlist.length} people have joined the waitlist.`}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : waitlist.length === 0 ? (
                        <div className="text-center py-20 bg-muted/50 rounded-lg border-2 border-dashed">
                            <ListChecks className="mx-auto h-16 w-16 text-muted-foreground" />
                            <h2 className="mt-6 text-xl font-semibold">No one has joined yet.</h2>
                            <p className="mt-2 text-muted-foreground">Share your book to get people excited!</p>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Email</TableHead>
                                    <TableHead className="text-right">Date Joined</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {waitlist.map((entry) => (
                                    <TableRow key={entry.id}>
                                        <TableCell className="font-medium">{entry.email}</TableCell>
                                        <TableCell className="text-right text-muted-foreground">
                                            {entry.createdAt ? format(new Date(entry.createdAt.seconds * 1000), 'PPP') : 'N/A'}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminWaitlistPage;
