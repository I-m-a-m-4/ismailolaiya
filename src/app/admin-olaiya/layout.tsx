'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { LoaderCircle, LayoutDashboard, BookOpen, ShoppingBag, Mic, LogOut, Star, ListChecks } from 'lucide-react';
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarContent, SidebarHeader, SidebarInset } from '@/components/ui/sidebar';
import Link from 'next/link';

const ADMIN_EMAILS = ['scalewitholaiya@gmail.com', 'bimex4@gmail.com'];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const pathname = usePathname();

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
  
  // Allow login page to render without the layout
  if (pathname === '/admin-olaiya/login') {
      return <>{children}</>;
  }

  if (user && user.email && ADMIN_EMAILS.includes(user.email)) {
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <div className="p-2 w-full flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground grid place-items-center">
                            <span className="font-bold text-lg">S</span>
                        </div>
                         <span className="font-semibold text-lg">Admin</span>
                    </div>
                </SidebarHeader>
                <SidebarContent className="p-4 mt-4">
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
                            <SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/waitlist')}>
                                <Link href="/admin-olaiya/waitlist"><ListChecks />Waitlist</Link>
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
            <SidebarInset>
                <header className="flex items-center justify-between p-4 border-b">
                    <SidebarTrigger />
                    <h1 className="text-xl font-semibold capitalize">{pathname.split('/').pop()?.replace('-', ' ')}</h1>
                </header>
                <main className="flex-grow p-6 bg-muted/30">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
  }

  return null;
}
