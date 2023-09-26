'use client';

import Image from 'next/image';
import { cn } from '../../lib/utils';
import Container from '../container/Container';
import Logo from '../logo/Logo';
import Styles from './Footer.module.css';
import LogoImg from '@images/general/logo.webp';
import Navigation from '../navigation/Navigation';
import Button from '../button/Button';
import TelegramIcon from '../icons/TelegramIcon';

const Footer = () => {
	const data = {
		telegram: {
			link: 'https://web.telegram.org/k/',
		},
		logo: {
			src: LogoImg,
			alt: 'BabyWalks',
		},
	};

	return (
		<footer className={cn(Styles.footer)}>
			<Container className={cn(Styles.container)}>
				<Logo className={cn(Styles.logo, '')}>
					<Image
						src={data.logo.src}
						alt={data.logo.alt}
						width={data.logo.width}
						height={data.logo.height}
						blurDataURL={data.logo.blurDataURL}
						placeholder="blur"
					/>
				</Logo>
				<Navigation className={cn(Styles.navigation, '')} />
				<Button href={data.telegram.link} className={cn(Styles.contact, '')}>
					<TelegramIcon className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] xl:h-[52px] xl:w-[52px]" />
				</Button>
			</Container>
		</footer>
	);
};

export default Footer;
