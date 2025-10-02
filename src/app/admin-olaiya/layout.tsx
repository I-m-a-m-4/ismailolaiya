
'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LoaderCircle, LayoutDashboard, BookOpen, ShoppingBag, Mic, LogOut, Star, ListChecks, Calendar, Clapperboard, Send } from 'lucide-react';
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarContent, SidebarHeader, SidebarMenuBadge } from '@/components/ui/sidebar';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { collection, getCountFromServer, query, where } from 'firebase/firestore';

const ADMIN_EMAILS = ['scalewitholaiya@gmail.com', 'bimex4@gmail.com'];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const pathname = usePathname();
  const [unreadCounts, setUnreadCounts] = useState({ submissions: 0, waitlist: 0 });

  useEffect(() => {
    if (!loading && user) {
        const fetchUnreadCounts = async () => {
            try {
                const submissionsQuery = query(collection(db, 'contactSubmissions'), where('read', '==', false));
                const submissionsSnapshot = await getCountFromServer(submissionsQuery);
                const submissionsCount = submissionsSnapshot.data().count;

                const waitlistQuery = query(collection(db, 'waitlist'), where('read', '==', false));
                const waitlistSnapshot = await getCountFromServer(waitlistQuery);
                const waitlistCount = waitlistSnapshot.data().count;

                setUnreadCounts({ submissions: submissionsCount, waitlist: waitlistCount });
            } catch (error) {
                console.error("Error fetching unread counts:", error);
            }
        };

        fetchUnreadCounts();
        
        // Optionally, you can set up a real-time listener here if needed
        // For now, fetching on layout mount is sufficient
    }
  }, [user, loading]);

  useEffect(() => {
    if (!loading) {
      if (!user || !user.email || !ADMIN_EMAILS.includes(user.email)) {
        if (pathname !== '/admin-olaiya/login') {
          router.replace('/admin-olaiya/login');
        }
      } else if (user && user.email && ADMIN_EMAILS.includes(user.email) && pathname === '/admin-olaiya/login') {
        router.replace('/admin-olaiya');
      }
    }
  }, [user, loading, router, pathname]);
  
  const handleLogout = async () => {
    await auth.signOut();
    router.push('/admin-olaiya/login');
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center gap-4">
          <LoaderCircle className="size-12 animate-spin text-primary" />
          <p className="text-muted-foreground">Authenticating...</p>
        </div>
      </div>
    );
  }
  
  if (pathname === '/admin-olaiya/login') {
      return <>{children}</>;
  }

  if (user && user.email && ADMIN_EMAILS.includes(user.email)) {
    return (
      <SidebarProvider>
        <div className="min-h-screen w-full flex">
          <Sidebar>
            <SidebarHeader>
              <Link href="/" className="flex items-center gap-2 font-semibold px-4">
                  <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground grid place-items-center">
                    <span className="font-bold text-lg">S</span>
                  </div>
                  <span className="font-semibold text-lg">Admin Panel</span>
                </Link>
            </SidebarHeader>
             <SidebarContent className="p-2 mt-4">
              <SidebarMenu>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === '/admin-olaiya'}>
                      <Link href="/admin-olaiya"><LayoutDashboard />Dashboard</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/posts')}>
                      <Link href="/admin-olaiya/posts"><BookOpen />Blog Posts</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/products')}>
                      <Link href="/admin-olaiya/products"><ShoppingBag />Products</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/podcasts')}>
                      <Link href="/admin-olaiya/podcasts"><Mic />Podcasts</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/testimonials')}>
                      <Link href="/admin-olaiya/testimonials"><Star />Testimonials</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/events')}>
                      <Link href="/admin-olaiya/events"><Calendar />Events</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/keynote')}>
                      <Link href="/admin-olaiya/keynote"><Clapperboard />Keynote Page</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/submissions')}>
                        <div className='flex items-center justify-between w-full'>
                            <Link href="/admin-olaiya/submissions" className='flex items-center gap-2'><Send />Submissions</Link>
                            {unreadCounts.submissions > 0 && <SidebarMenuBadge>{unreadCounts.submissions}</SidebarMenuBadge>}
                        </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/waitlist')}>
                        <div className='flex items-center justify-between w-full'>
                            <Link href="/admin-olaiya/waitlist" className='flex items-center gap-2'><ListChecks />Waitlist</Link>
                            {unreadCounts.waitlist > 0 && <SidebarMenuBadge>{unreadCounts.waitlist}</SidebarMenuBadge>}
                        </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout}><LogOut />Logout</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </Sidebar>
          <div className="flex flex-col flex-1">
             <header className="flex h-14 lg:h-16 items-center gap-4 border-b bg-muted/20 px-6">
                <SidebarTrigger className="md:hidden" />
                
                <div className="flex-1">
                    <h1 className="text-lg font-semibold capitalize">{pathname.split('/').pop()?.replace('-', ' ') || 'Dashboard'}</h1>
                </div>

                {user.photoURL ? (
                    <Image src={user.photoURL} alt={user.displayName || 'admin'} width={36} height={36} className="rounded-full" />
                ) : (
                    <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold border">
                        {user.email ? user.email.charAt(0).toUpperCase() : 'A'}
                    </div>
                )}
                 <button onClick={handleLogout} className="ml-4 p-2 rounded-md hover:bg-muted"><LogOut className="h-5 w-5"/></button>
            </header>
             <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6 bg-muted/30">
                {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    );
  }

  return null;
}
