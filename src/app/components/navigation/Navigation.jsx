import { cn } from '../../lib/utils';
import Styles from './Navigation.module.css';
import Link from 'next/link';

const Navigation = ({ className, children }) => {
	const data = [
		{
			href: '/#about',
			name: 'О курсе',
		},
		{
			href: '/#program',
			name: 'Программа',
		},
		{
			href: '/#testimonials',
			name: 'Отзывы',
		},
		{
			href: '/#affiliate',
			name: 'Партнёрская программа',
		},
	];
	return (
		<nav className={cn(Styles.navigation, '', className)}>
			<ul className={cn(Styles.list, '')}>
				{data.map((link, key) => (
					<li key={`__${key}__`} className={cn(Styles.item, '')}>
						<Link href={link.href} className={cn(Styles.link, '')}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
