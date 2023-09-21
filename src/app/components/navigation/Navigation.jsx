import clsx from 'clsx';
import cn from './Navigation.module.css';
import Link from 'next/link';

const Navigation = ({ className, children }) => {
	const data = [
		{
			href: '#',
			name: 'О курсе',
		},
		{
			href: '#',
			name: 'Программа',
		},
		{
			href: '#',
			name: 'Отзывы',
		},
		{
			href: '#',
			name: 'Партнёрская программа',
		},
	];
	return (
		<nav className={clsx(cn.navigation, '', className)}>
			<div className={clsx(cn.container, 'container')}>
				<ul className={clsx(cn.list, 'grid grid-cols-2')}>
					{data.map((link, key) => (
						<li key={`__${key}__`} className={clsx(cn.item, '')}>
							<Link
								href={link.href}
								className={clsx(cn.link, 'flex border-neutral-800 px-6 py-10')}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
