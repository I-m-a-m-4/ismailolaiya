'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { LoaderCircle, LayoutDashboard, BookOpen, ShoppingBag, Mic, LogOut, Star, ListChecks, PanelLeft } from 'lucide-react';
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarContent, SidebarHeader, SidebarInset } from '@/components/ui/sidebar';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
        <div className="min-h-screen w-full flex">
          <nav className="hidden md:flex h-screen flex-col border-r bg-muted/20">
              <div className="flex h-16 items-center border-b px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                  <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground grid place-items-center">
                    <span className="font-bold text-lg">S</span>
                  </div>
                  <span className="font-semibold text-lg">Admin Panel</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-4">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <Link href="/admin-olaiya" className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", { 'bg-muted text-primary': pathname === '/admin-olaiya' })}><LayoutDashboard className="h-4 w-4" />Dashboard</Link>
                  <Link href="/admin-olaiya/posts" className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", { 'bg-muted text-primary': pathname.startsWith('/admin-olaiya/posts') })}><BookOpen className="h-4 w-4" />Blog Posts</Link>
                  <Link href="/admin-olaiya/products" className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", { 'bg-muted text-primary': pathname.startsWith('/admin-olaiya/products') })}><ShoppingBag className="h-4 w-4" />Products</Link>
                  <Link href="/admin-olaiya/podcasts" className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", { 'bg-muted text-primary': pathname.startsWith('/admin-olaiya/podcasts') })}><Mic className="h-4 w-4" />Podcasts</Link>
                  <Link href="/admin-olaiya/testimonials" className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", { 'bg-muted text-primary': pathname.startsWith('/admin-olaiya/testimonials') })}><Star className="h-4 w-4" />Testimonials</Link>
                  <Link href="/admin-olaiya/waitlist" className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", { 'bg-muted text-primary': pathname.startsWith('/admin-olaiya/waitlist') })}><ListChecks className="h-4 w-4" />Waitlist</Link>
                </nav>
              </div>
          </nav>
          <div className="flex flex-col flex-1">
             <header className="flex h-14 lg:h-16 items-center gap-4 border-b bg-muted/20 px-6">
                <SidebarProvider>
                   <Sidebar>
                      <SidebarHeader>
                          <div className="p-2 w-full flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground grid place-items-center">
                                  <span className="font-bold text-lg">S</span>
                              </div>
                              <span className="font-semibold text-lg">Admin Panel</span>
                          </div>
                      </SidebarHeader>
                      <SidebarContent className="p-2 mt-4">
                          <SidebarMenu>
                              <SidebarMenuItem><SidebarMenuButton asChild isActive={pathname === '/admin-olaiya'}><Link href="/admin-olaiya"><LayoutDashboard />Dashboard</Link></SidebarMenuButton></SidebarMenuItem>
                              <SidebarMenuItem><SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/posts')}><Link href="/admin-olaiya/posts"><BookOpen />Blog Posts</Link></SidebarMenuButton></SidebarMenuItem>
                              <SidebarMenuItem><SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/products')}><Link href="/admin-olaiya/products"><ShoppingBag />Products</Link></SidebarMenuButton></SidebarMenuItem>
                              <SidebarMenuItem><SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/podcasts')}><Link href="/admin-olaiya/podcasts"><Mic />Podcasts</Link></SidebarMenuButton></SidebarMenuItem>
                              <SidebarMenuItem><SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/testimonials')}><Link href="/admin-olaiya/testimonials"><Star />Testimonials</Link></SidebarMenuButton></SidebarMenuItem>
                              <SidebarMenuItem><SidebarMenuButton asChild isActive={pathname.startsWith('/admin-olaiya/waitlist')}><Link href="/admin-olaiya/waitlist"><ListChecks />Waitlist</Link></SidebarMenuButton></SidebarMenuItem>
                          </SidebarMenu>
                      </SidebarContent>
                      <SidebarMenu><SidebarMenuItem><SidebarMenuButton onClick={handleLogout}><LogOut />Logout</SidebarMenuButton></SidebarMenuItem></SidebarMenu>
                  </Sidebar>
                  <SidebarTrigger className="md:hidden" />
                </SidebarProvider>
                
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
    );
  }

  return null;
}
