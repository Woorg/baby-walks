import Link from 'next/link';
import { cn } from '../../lib/utils';
import Styles from './Navigation.module.css';

const Navigation = ({ expanded, className, children }) => {
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
			<ul
				className={cn(Styles.list, '', {
					'flex-col items-center ': expanded,
				})}
			>
				{data.map((link, key) => (
					<li
						key={`__${key}__`}
						className={cn(Styles.item, '', {
							'w-full': expanded,
						})}
					>
						<Link
							href={link.href}
							className={cn(Styles.link, 'text-blue-950', {
								'w-full justify-center text-[#F3EFEB]': expanded,
							})}
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
