import type { Metadata } from 'next';
import { CategoryHub } from '@/components/CategoryGuidePages';
export const metadata: Metadata = { title: 'Food & Drink in Lincolnshire | Lincs Staycation Guide', description: 'Browse restaurants, pubs and cafés in Lincolnshire by location.', alternates: { canonical: '/food-drink' } };
export default function Page(){ return <CategoryHub kind="food-drink" />; }
