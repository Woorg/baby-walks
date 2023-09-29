'use client';

import LogoImg from '@images/general/logo.webp';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import Button from '../button/Button';
import Container from '../container/Container';
import TelegramIcon from '../icons/TelegramIcon';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import Styles from './Footer.module.css';

const Footer = () => {
	const data = {
		telegram: {
			link: 'https://t.me/BabyWalks',
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
						// blurDataURL={data.logo.blurDataURL}
						// placeholder="blur"
					/>
				</Logo>
				<Navigation className={cn(Styles.navigation, '')} />
				<Button href={data.telegram.link} className={cn(Styles.contact, '')}>
					<TelegramIcon className="h-[32px] w-[32px] lg:h-[36px] lg:w-[36px] 2xl:h-[52px] 2xl:w-[52px]" />
				</Button>
			</Container>
		</footer>
	);
};

export default Footer;
