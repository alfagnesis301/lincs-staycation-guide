import type { Metadata } from 'next';
import { CategoryHub } from '@/components/CategoryGuidePages';
export const metadata: Metadata = { title: 'Things to Do in Lincolnshire | Lincs Staycation Guide', description: 'Research-led Lincolnshire things to do guides by location from the revised PDF.', alternates: { canonical: '/things-to-do' } };
export default function Page(){ return <CategoryHub kind="things-to-do" />; }
