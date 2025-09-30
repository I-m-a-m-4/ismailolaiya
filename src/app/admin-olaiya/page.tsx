
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Mic, ShoppingBag, Star } from "lucide-react";
import Link from "next/link";

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Welcome, Admin!</h1>
      <p className="text-muted-foreground mb-8">
        This is your central command center. From here, you can manage all the content on your website. Use the sidebar navigation to jump between sections.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><BookOpen /> Blog Posts</CardTitle>
                <CardDescription>Create, edit, and delete articles for your blog.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild><Link href="/admin-olaiya/posts">Manage Posts</Link></Button>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShoppingBag /> Products</CardTitle>
                <CardDescription>Add new books and resources to your online shop.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild><Link href="/admin-olaiya/products">Manage Products</Link></Button>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Mic /> Podcasts</CardTitle>
                <CardDescription>Update your podcast episodes and details.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild><Link href="/admin-olaiya/podcasts">Manage Podcasts</Link></Button>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Star /> Testimonials</CardTitle>
                <CardDescription>Manage client reviews and success stories.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild><Link href="/admin-olaiya/testimonials">Manage Testimonials</Link></Button>
            </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
