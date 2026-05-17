import type { Metadata } from 'next';
import { CategoryHub } from '@/components/CategoryGuidePages';
export const metadata: Metadata = { title: 'Things to Do in Lincolnshire', description: 'Discover things to do in Lincolnshire by location, from heritage sites to family attractions.', alternates: { canonical: '/things-to-do' } };
export default function Page(){ return <CategoryHub kind="things-to-do" />; }
