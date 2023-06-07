import { v4 } from "uuid";

export const CARDS = [
    {
		id: v4(),
        src:'/public/images/icon-sedans.svg',
		alt:'Sedans',
		color:'orange',
		name:'SEDANS',
		text:'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
		bcolor:'buttonorange',
    },
    {
		id: v4(),
        src:'/public/images/icon-Suvs.svg',
		alt:'Suvs',
		color:'blue',
		name:'SUVS',
		text:'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures..' ,
		bcolor:'buttonblue',
    },
    {
		id: v4(),
        src:'/public/images/icon-Luxury.svg',
		alt:'Luxury',
		color:'green',
		name:'LUXURY',
		text:'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.' ,
		bcolor:'buttongreen',
    },
]