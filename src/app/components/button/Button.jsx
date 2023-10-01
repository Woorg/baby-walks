import Link from 'next/link';
import { cn } from '../../lib/utils';
import ArrowRight from '../icons/ArrowRight';
import Styles from './Button.module.css';

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
