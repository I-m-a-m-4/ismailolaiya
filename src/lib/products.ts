
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export type Product = {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number; // in cents
    imageId: string; // This is now unused.
    imageUrl: string;
};

export async function getAllProducts(): Promise<Product[]> {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, slug: doc.id } as Product));
    return products;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
    const docRef = doc(db, 'products', slug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id, slug: docSnap.id } as Product;
    } else {
        return null;
    }
}
