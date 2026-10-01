import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, CarFront, GitCompareArrows, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const nav = [
  ['Cars','/cars'],['Brands','/brands'],['EVs','/ev'],['New & Upcoming','/new'],['Compare','/compare'],['Finance','/finance'],['Dealers','/dealers']
] as const;
export function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const path = useRouterState({ select: s => s.location.pathname });
  const home = path === '/';
  return <>
    <header className={`absolute inset-x-0 top-0 z-50 border-b ${home ? 'border-line text-ink-foreground' : 'border-border text-foreground bg-background'}`}>
      <div className="mx-auto grid max-w-[1760px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-9 xl:grid-cols-[auto_1fr_auto] xl:px-14">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Motori home"><span className="grid size-9 shrink-0 place-items-center border border-current"><CarFront size={20}/></span><span className="font-display text-3xl font-bold leading-none uppercase">MOTORI<span className="text-signal">.</span></span><span className="hidden border-l border-current/30 pl-3 text-[9px] font-bold uppercase leading-tight tracking-widest 2xl:block">Pakistan's<br/>car space</span></Link>
        <nav className="hidden justify-center gap-5 2xl:gap-7 xl:flex" aria-label="Main navigation">{nav.map(([label,url]) => <Link key={url} to={url} className="text-[11px] font-bold uppercase tracking-wider opacity-80 transition-opacity hover:opacity-100" activeProps={{className:'text-signal opacity-100'}}>{label}</Link>)}</nav>
        <div className="flex items-center gap-2"><Button asChild variant={home?'inverse':'outline'} size="sm" className="hidden h-10 sm:inline-flex"><Link to="/compare" search={{cars:""}}><GitCompareArrows/> Compare</Link></Button><Button asChild variant="signal" size="sm" className="hidden h-10 sm:inline-flex"><Link to="/cars" search={{q:""}}>Explore cars <ArrowUpRight/></Link></Button><Button variant="ghost" size="icon" className="min-h-11 min-w-11 xl:hidden" aria-label={menu?'Close menu':'Open menu'} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</Button></div>
      </div>
      {menu && <nav className="grid gap-0 border-t border-line bg-ink px-5 py-4 text-ink-foreground xl:hidden" aria-label="Mobile menu">{nav.map(([label,url])=><Link key={url} to={url} onClick={()=>setMenu(false)} className="border-b border-line py-3 font-display text-2xl uppercase">{label}</Link>)}</nav>}
    </header>
    <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden" aria-label="Quick navigation">
      {([['Explore','/cars',Search],['Brands','/brands',CarFront],['Compare','/compare',GitCompareArrows],['More','/finance',Menu]] as const).map(([label,url,Icon])=><Link key={url} to={url} className="flex min-h-16 flex-col items-center justify-center gap-1 text-[10px] font-bold uppercase text-muted-foreground" activeProps={{className:'text-foreground'}}><Icon size={19}/>{label}</Link>)}
    </nav>
  </>;
}
export function SiteFooter(){return <footer className="bg-ink px-5 py-14 text-ink-foreground md:px-12"><div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-8 border-t border-line pt-8 md:flex-row"><div><div className="font-display text-4xl font-bold">MOTORI<span className="text-signal">.</span></div><p className="mt-3 max-w-sm text-xs leading-6 opacity-60">A considered way to discover cars in Pakistan. Prices, features and availability require confirmation with an authorised dealer.</p></div><div className="flex flex-wrap gap-x-7 gap-y-3 text-xs uppercase tracking-wider">{nav.map(([label,url])=><Link key={url} to={url}>{label}</Link>)}</div></div><div className="mx-auto mt-12 max-w-[1600px] text-[10px] uppercase tracking-widest opacity-50">© 2026 Motori · Editorial imagery is illustrative, not model-specific.</div></footer>}
export function PageIntro({eyebrow,title,description}: {eyebrow:string;title:string;description:string}) {return <section className="bg-ink px-5 pb-14 pt-36 text-ink-foreground md:px-12 md:pb-20 md:pt-44"><div className="mx-auto max-w-[1600px]"><p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-signal">{eyebrow}</p><h1 className="display-heading max-w-5xl text-6xl sm:text-7xl md:text-8xl lg:text-9xl">{title}</h1><p className="mt-7 max-w-xl text-sm leading-7 opacity-70 md:text-base">{description}</p></div></section>}
