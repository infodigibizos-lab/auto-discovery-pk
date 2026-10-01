import { createFileRoute } from '@tanstack/react-router';
import { PageIntro } from '@/components/auto/site-shell';
import { CatalogGrid } from '@/components/auto/catalog-grid';
import { pageHead } from '@/lib/seo';
export const Route=createFileRoute('/cars')({validateSearch:(s:Record<string,unknown>)=>({q:typeof s.q==='string'?s.q:''}),head:()=>pageHead('Explore Cars in Pakistan | Motori','Search and filter car models by brand, body type and powertrain in Pakistan.'),component:Cars});
function Cars(){const {q}=Route.useSearch();return <><PageIntro eyebrow="THE VEHICLE EXPLORER" title="FIND YOUR DRIVE." description="Explore a growing directory of cars in Pakistan. Confirm specifications, availability and pricing with an authorised dealer."/><section className="mx-auto max-w-[1600px] px-5 py-12 md:px-12 md:py-20"><CatalogGrid initialQuery={q}/></section></>}
