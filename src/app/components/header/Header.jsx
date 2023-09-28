'use client';

import LogoImg from '@images/general/logo.webp';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import Button from '../button/Button';
import Container from '../container/Container';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';
import TelegramIcon from '../icons/TelegramIcon';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import Styles from './Header.module.css';

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

				<div
					className={cn(Styles.wrapper, '', {
						'bg-[rgba(6, 23, 85, 0.10)] flex-col rounded-b-[20px]': expanded,
					})}
				>
					<Navigation
						className={cn(Styles.navigation, 'hidden lg:flex', {
							flex: expanded,
						})}
					/>
					<div
						className={cn(Styles.control, 'flex', {
							'flex ': expanded,
						})}
					>
						<Button
							href={data.telegram.link}
							className={cn(Styles.contact, 'hidden lg:inline-flex', {
								'inline-flex': expanded,
							})}
						>
							<TelegramIcon className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] xl:h-[52px] xl:w-[52px]" />
						</Button>

						<Button
							href={data.contact.link}
							className={cn(Styles.contact, Styles.general, 'btn btn_big hidden lg:inline-flex', {
								'btn_full -order-1 inline-flex ': expanded,
							})}
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
								<CloseIcon className={cn('h-[32px] w-[32px]')} />
							) : (
								<MenuIcon className={cn('w-[32px h-[32px]')} />
							)}
						</button>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
