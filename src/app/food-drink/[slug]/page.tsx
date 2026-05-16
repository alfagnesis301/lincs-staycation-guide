import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocationCategoryPage } from '@/components/CategoryGuidePages';
import { getLocationGuideBySlug, locationGuides } from '@/data/locationGuides';
export function generateStaticParams(){ return locationGuides.map(g=>({slug:g.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata>{ const {slug}=await params; const guide=getLocationGuideBySlug(slug); if(!guide) return {}; return { title: 'Food & Drink in '+guide.name+' | Lincs Staycation Guide', description: 'Find restaurants, pubs and cafés in '+guide.name+', Lincolnshire', alternates:{canonical:'/food-drink/'+guide.slug} }; }
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const guide=getLocationGuideBySlug(slug); if(!guide) notFound(); return <LocationCategoryPage guide={guide} kind="food-drink" />; }
