import clsx from 'clsx';
import cn from './Navigation.module.css';
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
		<nav className={clsx(cn.navigation, '', className)}>
			<ul className={clsx(cn.list, '')}>
				{data.map((link, key) => (
					<li key={`__${key}__`} className={clsx(cn.item, '')}>
						<Link href={link.href} className={clsx(cn.link, 'flex px-5 py-[10px]')}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
