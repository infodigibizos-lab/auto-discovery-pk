import { createFileRoute } from '@tanstack/react-router';
import { PageIntro } from '@/components/auto/site-shell';
import { VehicleCard } from '@/components/auto/vehicle-card';
import { imagery, upcoming } from '@/data/vehicles';
import { pageHead } from '@/lib/seo';
export const Route=createFileRoute('/new')({head:()=>pageHead('New and Upcoming Cars in Pakistan | Motori','Track anticipated automotive arrivals in Pakistan with clearly marked unconfirmed launch information.'),component:New});
function New(){return <><PageIntro eyebrow="NEW & UPCOMING" title="THE NEXT CHAPTER." description="Discover the models expected on Pakistan's horizon. Dates, specifications and prices are pending official confirmation."/><div className="relative h-72 overflow-hidden md:h-[470px]"><img src={imagery.suv} alt="Illustrative automotive scene" className="h-full w-full object-cover"/><span className="absolute bottom-4 left-5 bg-ink/80 px-3 py-1 text-xs uppercase text-ink-foreground">Illustrative image</span></div><section className="mx-auto max-w-[1600px] px-5 py-16 md:px-12 md:py-24"><p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">ON THE HORIZON / UNCONFIRMED</p><h2 className="display-heading mb-10 text-6xl">COMING SOON.</h2><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{upcoming.map(v=><VehicleCard key={v.id} vehicle={v}/>)}</div></section></>}
