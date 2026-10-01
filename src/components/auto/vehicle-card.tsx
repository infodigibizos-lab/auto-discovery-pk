import { Link } from '@tanstack/react-router';
import { ArrowUpRight, GitCompareArrows } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice, vehicleImage } from '@/data/vehicles';
import type { Vehicle } from '@/types/vehicle';

export function VehicleCard({vehicle, onCompare, selected=false}: {vehicle: Vehicle; onCompare?: (vehicle: Vehicle)=>void; selected?: boolean}) {
 return <article className="group overflow-hidden border border-border bg-card transition-shadow hover:shadow-xl">
  <div className="relative aspect-[1.48] overflow-hidden bg-soft"><img src={vehicleImage(vehicle)} loading="lazy" alt="Illustrative automotive photograph, not the named model" className="editorial-image h-full w-full group-hover:scale-105"/><span className="absolute left-4 top-4 bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-foreground">{vehicle.statuses[0] || 'DISCOVER'}</span><span className="absolute bottom-3 right-3 bg-ink/75 px-2 py-1 text-[9px] uppercase tracking-wider text-ink-foreground backdrop-blur-sm">Illustrative image</span></div>
  <div className="p-5 md:p-6"><p className="text-[10px] font-bold uppercase tracking-[.17em] text-muted-foreground">{vehicle.brand} / {vehicle.category}</p><h3 className="mt-2 font-display text-4xl font-semibold uppercase leading-none">{vehicle.model}</h3><div className="mt-6 flex items-center justify-between border-t border-border pt-4"><div><p className="text-[9px] uppercase tracking-wider text-muted-foreground">Indicative price</p><p className="mt-1 text-sm font-bold">{formatPrice(vehicle.price)}</p></div><span className="text-xs text-muted-foreground">{vehicle.fuelType || 'Verify details'}</span></div><div className="mt-5 flex gap-2"><Button asChild size="sm" className="h-10 flex-1"><Link to="/cars/$brand/$model" params={{brand:vehicle.brand.toLowerCase(),model:vehicle.model.toLowerCase().replace(/[^a-z0-9]+/g,'-')}} search={{q:''}}>Explore <ArrowUpRight/></Link></Button>{onCompare && <Button variant={selected?'signal':'outline'} size="icon" className="size-10 shrink-0" aria-label={`${selected?'Remove':'Compare'} ${vehicle.brand} ${vehicle.model}`} title="Add to compare" onClick={()=>onCompare(vehicle)}><GitCompareArrows/></Button>}</div></div>
 </article>;
}
