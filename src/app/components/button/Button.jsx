'use client';

import { Button, Link } from 'react-scroll';
import { cn } from '../../lib/utils';
import ArrowRight from '../icons/ArrowRight';
import Styles from './Button.module.css';

const BabyButton = ({ href, arrow = false, className, children, ...props }) => {
	if (href) {
		return (
			<Link to={href} className={cn(Styles.button, className)} {...props}>
				{children}
				{arrow ? <ArrowRight /> : null}
			</Link>
		);
	} else {
		return (
			<Button className={cn(Styles.button, className)}>
				{children}
				{arrow ? <ArrowRight /> : null}
			</Button>
		);
	}
};

export default BabyButton;
