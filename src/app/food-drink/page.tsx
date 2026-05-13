import type { Metadata } from 'next';
import { CategoryHub } from '@/components/CategoryGuidePages';
export const metadata: Metadata = { title: 'Food & Drink in Lincolnshire | Lincs Staycation Guide', description: 'Research-led Lincolnshire food & drink guides by location from the revised PDF.', alternates: { canonical: '/food-drink' } };
export default function Page(){ return <CategoryHub kind="food-drink" />; }
