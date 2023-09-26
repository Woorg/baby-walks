'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import Button from '../button/Button';
import Link from 'next/link';
import Navigation from '../navigation/Navigation';
import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';
import Logo from '../logo/Logo';
import Container from '../container/Container';
import Styles from './Header.module.css';
import Image from 'next/image';
import LogoImg from '@images/general/logo.webp';
import TelegramIcon from '../icons/TelegramIcon';
import { cn } from '../../lib/utils';

const Header = () => {
	const panelId = useId();
	const [expanded, setExpanded] = useState(false);
	const toggleRef = useRef();
	const navRef = useRef();
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		function onClick(event) {
			if (event.target.closest('a')?.href === window.location.href) {
				setExpanded(false);
				setIsInverted(false);
			}
		}
		window.addEventListener('click', onClick);

		return () => {
			window.removeEventListener('click', onClick);
		};
	}, []);

	const toggleMenu = () => {
		setExpanded(!expanded);
	};

	const data = {
		telegram: {
			link: 'https://web.telegram.org/k/',
		},
		contact: {
			link: '#contact',
			text: 'Присоединиться',
		},
		logo: {
			src: LogoImg,
			alt: 'BabyWalks',
		},
	};

	return (
		<header className={cn(Styles.header, 'fixed left-0 top-0 z-50 w-full transition-colors')}>
			<Container className={cn(Styles.container, '')}>
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
				<div className={cn(Styles.wrapper, '')}>
					<Navigation className={cn(Styles.navigation, '')} />

					<div className={cn(Styles.control, '')}>
						<Button href={data.telegram.link} className={cn(Styles.contact, '')}>
							<TelegramIcon className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] xl:h-[52px] xl:w-[52px]" />
						</Button>

						<Button
							href={data.contact.link}
							className={cn(Styles.contact, Styles.general, 'btn btn_big')}
						>
							{data.contact.text}
						</Button>

						<button
							ref={toggleRef}
							type="button"
							onClick={toggleMenu}
							aria-expanded={expanded.toString()}
							aria-controls={panelId}
							className={cn('rounded-full p-2.5 transition lg:hidden')}
							aria-label="Toggle navigation"
						>
							{expanded ? (
								<CloseIcon className={cn('h-9 w-9')} />
							) : (
								<MenuIcon className={cn('h-9 w-9')} />
							)}
						</button>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
