// import "./globals.css";
import '../../public/assets/styles/style.css';

import { Inter } from 'next/font/google';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Курс по уходу за ребёнком ребёнком от 0 до 12 месяцев - Babywalks',
	description:
		'Обеспечьте своему малышу наилучший уход! Узнайте все тонкости воспитания новорождённого с помощью подробного руководства на первые 12 месяцев.',
};

export default function Layout({ children }) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
