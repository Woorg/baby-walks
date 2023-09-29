import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { cn } from '../../lib/utils';
import Styles from './Logo.module.css';

const Logo = ({ className, children }) => {
	// const router = useRouter();
	// const isMainPage = router.pathname === '/';

	return (
		<Link className={cn(className)} href={'/#top'}>
			{children}
		</Link>
	);
};

export default Logo;
