import type { Metadata } from 'next';
import { CategoryHub } from '@/components/CategoryGuidePages';
export const metadata: Metadata = { title: 'Places to Stay in Lincolnshire | Lincs Staycation Guide', description: 'Research-led Lincolnshire places to stay guides by location from the revised PDF.', alternates: { canonical: '/places-to-stay' } };
export default function Page(){ return <CategoryHub kind="places-to-stay" />; }
