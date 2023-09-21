import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import cn from './Logo.module.css';

const Logo = ({ invert, href, className, children, ...props }) => {
	const router = useRouter();
	const isMainPage = router.pathname === '/';

	className = clsx(cn.logo, className, invert ? 'text-white' : 'text-neutral-900');
	if (isMainPage) {
		return (
			<Link aria-label="Главная" href="/" className={className} {...props}>
				{children}
			</Link>
		);
	} else {
		return (
			<h1 className={className} {...props}>
				{children}
			</h1>
		);
	}
};

export default Logo;
