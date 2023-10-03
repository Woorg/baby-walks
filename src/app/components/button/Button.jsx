'use client';

import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { cn } from '../../lib/utils';
import ArrowRight from '../icons/ArrowRight';
import Styles from './Button.module.css';

const BabyButton = ({ href, to, arrow = false, className, children, ...props }) => {
	if (to) {
		return (
			<ScrollLink to={to} className={cn(Styles.button, className)} {...props}>
				{children}
				{arrow ? <ArrowRight /> : null}
			</ScrollLink>
		);
	}
	if (href) {
		return (
			<Link href={href} className={cn(Styles.button, className)}>
				{children}
				{arrow ? <ArrowRight /> : null}
			</Link>
		);
	}
};

export default BabyButton;
