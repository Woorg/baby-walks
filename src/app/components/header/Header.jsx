'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import Container from '../container/Container';
import Logo from '../logo/Logo';
import clsx from 'clsx';
import Button from '../button/Button';
// menu icons
// menu icons
import Link from 'next/link';
import Navigation from '../navigation/Navigation';

const Header = () => {
	const panelId = useId();
	const [expanded, setExpanded] = useState(false);
	const toggleRef = useRef();
	const closeRef = useRef();
	const navRef = useRef();
	const shouldReduceMotion = useReducedMotion();
	const [isInverted, setIsInverted] = useState(false); // Track inverted state

	useEffect(() => {
		function onClick(event) {
			if (event.target.closest('a')?.href === window.location.href) {
				setExpanded(false);
				setIsInverted(false); // Reset inverted state when menu is closed
			}
		}
		window.addEventListener('click', onClick);

		return () => {
			window.removeEventListener('click', onClick);
		};
	}, []);

	const toggleMenu = () => {
		setExpanded(!expanded);
		setIsInverted(!expanded); // Invert the colors when menu is opened/closed
	};

	return (
		<MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
			<header
				className={clsx(
					'transition-colors',
					'z-50 w-full p-4',
					expanded ? 'bg-white' : 'bg-transparent',
				)}
			>
				<div
					className={clsx(
						'flex items-center justify-between',
						expanded ? 'relative z-50 text-white' : 'bg-transparent text-black',
					)}
				>
					{/* Logo */}
					<Link href={'/'} aria-label="Home">
						<Logo
							className={clsx({
								'text-white': expanded,
								'text-black': !expanded,
							})}
						>
							Studio_clone
						</Logo>
					</Link>

					<div className="flex items-center gap-x-8">
						<Button
							href={'/contact'}
							className={clsx(
								expanded
									? 'bg-white text-black hover:bg-white hover:text-black'
									: 'bg-black text-white hover:bg-black hover:text-white',
							)}
						>
							Contact us
						</Button>

						<button
							ref={toggleRef}
							type="button"
							onClick={toggleMenu}
							aria-expanded={expanded.toString()}
							aria-controls={panelId}
							className={clsx(
								'group rounded-full p-2.5 transition',
								expanded
									? 'bg-white text-black  hover:bg-white hover:text-black'
									: 'bg-black text-white hover:bg-black hover:text-black',
							)}
							aria-label="Toggle navigation"
						>
							{expanded ? (
								<IoMdClose
									className={clsx(
										'h-6 w-6',
										expanded
											? 'fill-black group-hover:fill-black'
											: 'fill-black group-hover:fill-white',
									)}
								/>
							) : (
								<HiMenuAlt4
									className={clsx(
										'h-6 w-6',
										expanded
											? 'fill-black group-hover:fill-black'
											: 'fill-white group-hover:fill-white',
									)}
								/>
							)}
						</button>
					</div>
				</div>

				<motion.div
					layout
					id={panelId}
					style={{ height: expanded ? 'auto' : '0' }}
					className="fixed left-0 top-0 z-10 w-full overflow-hidden bg-neutral-950 pt-0"
					aria-hidden={expanded ? undefined : 'true'}
					inert={expanded ? undefined : ''}
				>
					<motion.div layout className="bg-neutral-800">
						<div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
							<Navigation />
						</div>
					</motion.div>
				</motion.div>
			</header>
		</MotionConfig>
	);
};

export default Header;
