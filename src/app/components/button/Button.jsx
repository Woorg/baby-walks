import Link from 'next/link';
import Styles from './Button.module.css';
import { cn } from '../../lib/utils';

const Button = ({ href, className, children, ...props }) => {

	if (href) {
		return (
			<Link href={href} className={cn(Styles.button, className)} {...props}>
				{children}
			</Link>
		);
	} else {
		return <button className={cn(Styles.button, className)}>{children}</button>;
	}
};

export default Button;
