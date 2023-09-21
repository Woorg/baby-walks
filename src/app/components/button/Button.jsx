import clsx from 'clsx';
import Link from 'next/link';
import cn from './Button.module.css';



const Button = ({ href, className, invert, children, ...props }) => {
	className = clsx(
		cn.button,
		className,
		invert
			? 'bg-white text-neutral-950 hover:bg-neutral-200'
			: 'bg-neutral-950 text-white hover:bg-neutral-800',
	);

	if (href) {
		return (
			<Link href={href} className={className} {...props}>
				{children}

			</Link>
		);
	} else {
		return <button className={className}>{children}</button>;
	}
};

export default Button;
