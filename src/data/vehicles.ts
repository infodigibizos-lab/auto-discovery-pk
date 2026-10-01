import type { Vehicle } from '@/types/vehicle';
import showroom from '@/assets/showroom-hero.jpg';
import suv from '@/assets/editorial-suv.jpg';
import ev from '@/assets/editorial-ev.jpg';

// Editorial photographs are illustrative, not photographs of the named models.
export const imagery = { showroom, suv, ev };
const rows: [string, string, string, string, string[]][] = [
  ['Toyota','Corolla Cross','SUV','Hybrid',['HYBRID']],
  ['Toyota','Corolla','Sedan','Petrol',[]],
  ['Toyota','Yaris','Sedan','Petrol',[]],
  ['Toyota','Fortuner','SUV','Diesel',[]],
  ['Suzuki','Swift','Hatchback','Petrol',[]],
  ['Suzuki','Alto','Hatchback','Petrol',[]],
  ['Honda','Civic','Sedan','Petrol',[]],
  ['Honda','City','Sedan','Petrol',[]],
  ['Honda','HR-V','SUV','Petrol',[]],
  ['Kia','Sportage','SUV','Petrol',[]],
  ['Kia','Sorento','SUV','Hybrid',['HYBRID']],
  ['Hyundai','Tucson','SUV','Hybrid',['HYBRID']],
  ['Hyundai','Elantra','Sedan','Petrol',[]],
  ['Changan','Oshan X7','SUV','Petrol',[]],
  ['MG','HS','SUV','Hybrid',['HYBRID']],
  ['Haval','H6','SUV','Hybrid',['HYBRID']],
  ['BYD','Atto 3','SUV','Electric',['ELECTRIC']],
  ['BYD','Seal','Sedan','Electric',['ELECTRIC']],
  ['Deepal','S07','SUV','Electric',['ELECTRIC']],
  ['Deepal','L07','Sedan','Electric',['ELECTRIC']],
  ['Jaecoo','J7','SUV','Hybrid',['HYBRID']],
  ['Jetour','Dashing','SUV','Petrol',[]],
  ['Chery','Tiggo 8 Pro','SUV','Petrol',[]],
  ['Peugeot','2008','SUV','Petrol',[]],
  ['Proton','Saga','Sedan','Petrol',[]],
  ['Isuzu','D-Max','Pickup','Diesel',['COMMERCIAL']],
  ['Xpeng','G6','SUV','Electric',['ELECTRIC','PREMIUM']],
  ['Zeekr','001','Sedan','Electric',['ELECTRIC','PREMIUM']],
];
export const vehicles: Vehicle[] = rows.map(([brand, model, category, fuelType, statuses]) => ({
  id: `${brand}-${model}`.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-$/,''),
  brand, model, category, bodyType: category, fuelType,
  availabilityStatus: 'Verify with dealer', bookingStatus: 'Verify with dealer',
  statuses: statuses as Vehicle['statuses'],
  description: `Explore the ${brand} ${model} in Pakistan. Contact an authorised dealer to confirm the latest price, specifications and availability.`,
}));
const upcomingRows: Array<[string, string, string]> = [
  ['Changan','Lumin','Hatchback'],['Geely','EX2','SUV'],['Geely','EX5','SUV'],['Avatr','11','SUV'],['Deepal','S09','SUV'],['iCAUR','V23','SUV'],['Jetour','T1','SUV']
];
export const upcoming: Vehicle[] = upcomingRows.map(([brand,model,category]) => ({
  id: `${brand}-${model}`.toLowerCase().replace(/[^a-z0-9]+/g,'-'), brand, model, category,
  statuses: ['UPCOMING'], availabilityStatus:'Expected; not confirmed', bookingStatus:'Coming soon',
  description: `The ${brand} ${model} is listed as an expected arrival. Timing, specifications and pricing should be verified with an official source.`,
}));
export const allVehicles = [...vehicles, ...upcoming];
export const brands = ['Toyota','Suzuki','Honda','Kia','Hyundai','Changan','MG','Haval','BYD','Chery','Proton','Isuzu','JAC','Peugeot','DFSK','Prince','Deepal','Jetour','Jaecoo','Omoda','iCAUR','Aion','Hyptec','Xpeng','Zeekr','ORA','Tank','BAIC','GWM','Geely','Nevo','GUGO','Honri','Seres','Kaiyi','Forthing','JMEV','Alektra','Nora','Riddara','JW Forland','Inverex','Dongfeng','BMW','Mercedes-Benz','Audi'];
export const categories = ['All','SUV','Sedan','Hatchback','Crossover','Pickup','MPV','EV','Hybrid','Luxury','Performance','Commercial'];
export const formatPrice = (price?: number) => price === undefined ? 'Call for price' : `PKR ${price.toLocaleString('en-PK')}`;
export const vehicleImage = (vehicle: Vehicle) => vehicle.fuelType === 'Electric' ? ev : vehicle.category === 'SUV' || vehicle.category === 'Pickup' ? suv : showroom;
