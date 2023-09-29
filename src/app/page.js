import Script from 'next/script';
import Advantages from './components/advantages/Advantages';
import Affiliate from './components/affiliate /Affiliate';
import Hero from './components/hero/Hero';
import MainLayout from './components/mainLayout/MainLayout';
import Program from './components/program/Program';
import Studio from './components/studio/Studio';
import Testimonials from './components/testimonials/Testimonials';
import Whom from './components/whom /Whom';

export default function Home() {
	return (
		<MainLayout id="top">
			<Hero />
			<Advantages />
			<Program />
			<Testimonials />
			<Whom />
			<Affiliate />
			<Studio />
		</MainLayout>
	);
}
