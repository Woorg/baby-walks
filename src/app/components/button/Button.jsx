import Link from 'next/link';
import Styles from './Button.module.css';
import { cn } from '../../lib/utils';
import ArrowRight from '../icons/ArrowRight';

const Button = ({ href, arrow = false, className, children, ...props }) => {
	if (href) {
		return (
			<Link href={href} className={cn(Styles.button, className)} {...props}>
				{children}
				{arrow ? <ArrowRight /> : null}
			</Link>
		);
	} else {
		return (
			<button className={cn(Styles.button, className)}>
				{children}
				{arrow ? <ArrowRight /> : null}
			</button>
		);
	}
};

export default Button;
