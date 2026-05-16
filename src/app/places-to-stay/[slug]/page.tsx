import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocationCategoryPage } from '@/components/CategoryGuidePages';
import { getLocationGuideBySlug, locationGuides } from '@/data/locationGuides';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lincs-staycation-guide.co.uk';

export function generateStaticParams(){ return locationGuides.map(g=>({slug:g.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata>{ const {slug}=await params; const guide=getLocationGuideBySlug(slug); if(!guide) return {}; const title = 'Places to Stay in '+guide.name; const description = 'Find places to stay in '+guide.name+', Lincolnshire'; const path = '/places-to-stay/'+guide.slug; return { metadataBase: new URL(SITE_URL), title, description, alternates:{canonical:path}, openGraph:{title: `${title} | Lincs Staycation Guide`, description, url:`${SITE_URL}${path}`, siteName:'Lincs Staycation Guide', locale:'en_GB', type:'article'}, twitter:{card:'summary_large_image', title, description} }; }
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const guide=getLocationGuideBySlug(slug); if(!guide) notFound(); return <LocationCategoryPage guide={guide} kind="places-to-stay" />; }
