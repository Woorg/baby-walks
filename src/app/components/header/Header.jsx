'use client';

import LogoImg from '@images/general/logo.webp';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-scroll';
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

	const updateExpandedState = () => {
		if (window.innerWidth > 768) {
			setExpanded(false);
		}
	};

	useEffect(() => {
		updateExpandedState();

		function onClick(event) {
			if (event.target.closest('a')?.href === window.location.href) {
				setExpanded(false);
			} else if (!navRef.current.contains(event.target)) {
				// Close the menu if the click is outside the menu
				setExpanded(false);
			}
		}
		window.addEventListener('click', onClick);
		const mediaQuery = window.matchMedia('(min-width: 769px)');
		mediaQuery.addListener(updateExpandedState);

		return () => {
			window.removeEventListener('click', onClick);
			mediaQuery.removeListener(updateExpandedState);
		};
	}, []);

	const toggleMenu = () => {
		setExpanded(!expanded);
	};

	const closeMenu = () => {
		setExpanded(false);
	};

	const data = {
		telegram: {
			link: 'https://t.me/BabyWalks',
		},
		contact: {
			link: 'signin',
			text: 'Присоединиться',
		},
		logo: {
			src: LogoImg,
			alt: 'BabyWalks',
		},
	};

	return (
		<MotionConfig transition={shouldReduceMotion ? { duration: 0 } : null}>
			<header className={cn(Styles.header, 'fixed left-0 top-0 z-50 w-full transition-colors', {})}>
				<Container
					className={cn(Styles.container, 'py-2.5 lg:py-5', {
						'py-0 lg:py-0': expanded,
					})}
				>
					<Logo
						className={cn(Styles.logo, '', {
							hidden: expanded,
						})}
						link="/"
					>
						<Image
							src={data.logo.src}
							alt={data.logo.alt}
							width={data.logo.width}
							height={data.logo.height}
							// blurDataURL={data.logo.blurDataURL}
							// placeholder="blur"
						/>
					</Logo>

					<motion.div
						// layout
						// style={{ height: expanded ? 'auto' : '0' }}
						ref={navRef}
						className={cn(Styles.wrapper, 'before:hidden after:hidden', {
							'fixed left-0 right-0 top-0 w-full flex-col justify-center overflow-hidden rounded-b-[20px] border border-white  p-5 transition-colors after:z-10 after:block after:bg-[rgba(6,23,85,.20)] after:backdrop-blur-[6px]':
								expanded,
						})}
					>
						<Navigation
							expanded={expanded}
							closeMenu={closeMenu}
							className={cn(
								Styles.navigation,
								'hidden max-w-[421px] text-white lg:flex lg:max-w-[578px] ',
								{
									'mt-10 flex max-w-full ': expanded,
								},
							)}
						/>
						<div
							className={cn(Styles.control, 'flex max-w-[607px]', {
								'mt-10 max-w-full ': expanded,
							})}
						>
							<Button
								href={data.telegram.link}
								className={cn(Styles.contact, 'hidden lg:inline-flex', {
									'inline-flex hidden': expanded,
								})}
							>
								<TelegramIcon className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] xl:h-[52px] xl:w-[52px]" />
							</Button>

							<Link
								to={data.contact.link}
								smooth={true}
								spy={true}
								hashSpy={true}
								offset={-72}
								className={cn(
									Styles.contact,
									Styles.general,
									'btn btn_big btn_anim hidden  lg:inline-flex',
									{
										'btn_full -order-1 inline-flex h-[40px] justify-center ': expanded,
									},
								)}
							>
								{data.contact.text}
							</Link>

							<button
								ref={toggleRef}
								type="button"
								onClick={toggleMenu}
								aria-expanded={expanded.toString()}
								aria-controls={panelId}
								className={cn(Styles.trigger, 'rounded-full p-2.5 lg:hidden', {
									'absolute right-2.5 top-2.5 ': expanded,
								})}
								aria-label="Toggle navigation"
							>
								{expanded ? (
									<CloseIcon className={cn('pointer-events-none h-[32px] w-[32px]')} />
								) : (
									<MenuIcon className={cn('pointer-events-none h-[14px] w-[35px]')} />
								)}
							</button>
						</div>
					</motion.div>
				</Container>
			</header>
		</MotionConfig>
	);
};

export default Header;
