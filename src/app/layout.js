// import "./globals.css";
import '../../public/assets/styles/style.css';
import { Cormorant_Infant, Manrope, Noto_Serif } from 'next/font/google';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { cn } from './lib/utils';

const manrope = Manrope({
	subsets: ['cyrillic'],
	display: 'swap',
	preload: true,
	variable: '--manrope',
});
const cormorantInfant = Cormorant_Infant({
	weight: ['600'],
	subsets: ['cyrillic'],
	display: 'swap',
	preload: true,
	variable: '--cormorant',
});
const notoSerif = Noto_Serif({
	subsets: ['cyrillic'],
	display: 'swap',
	preload: true,
	variable: '--noto',
});

export const metadata = {
	title: 'Курс по уходу за ребёнком ребёнком от 0 до 12 месяцев - Babywalks',
	description:
		'Обеспечьте своему малышу наилучший уход! Узнайте все тонкости воспитания новорождённого с помощью подробного руководства на первые 12 месяцев.',
};

export default function Layout({ children }) {
	return (
		<html lang="ru">
			<body
				className={cn(
					manrope.variable,
					cormorantInfant.variable,
					notoSerif.variable,
					'flex min-h-screen flex-col',
				)}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
