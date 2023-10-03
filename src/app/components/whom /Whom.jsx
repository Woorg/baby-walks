'use client';

import Cloud from '@images/general/cloud.webp';
import WhomImg from '@images/general/whom/whoImg.webp';
import Image from 'next/image';
import Script from 'next/script';
import Iframe from 'react-iframe';
import { cn } from '../../lib/utils';
import Container from '../container/Container';
import { SpinIcon } from '../icons/SpinIcon';
import Styles from './Whom.module.css';

const Whom = ({ children }) => {
	const data = {
		title: 'Кого мы ждём на курсе?',
		text: 'На курсе мы ждём абсолютно всех, кто хочет разобраться в одной из самых важных стадий развития ребёнка от 0–12 месяцев!',
		image: {
			src: WhomImg,
			alt: 'image',
		},
		cloud: {
			src: Cloud,
			alt: 'cloud',
		},
	};

	// try {
	// 	const gc = new GetCourse('babywalks.getcourse.ru', 'b0d3e0ab226ad478d5739fbf4d6d94228c68cd2f');

	// 	const res = await gc.user.addUser({
	// 		user: {
	// 			email: 'test@mail.ru',
	// 		},
	// 	});

	// 	console.log(res);
	// } catch (err) {
	// 	if (err instanceof FormatError || err instanceof ServerError) console.error(err.response);
	// 	else console.error(err);
	// }

	return (
		<section id="whom" className={cn(Styles.whom, '')}>
			<Container className={cn(Styles.container)}>
				<div className={cn(Styles.row)}>
					<figure className={cn(Styles.image)}>
						<SpinIcon className={cn(Styles.spin, 'spin-logo_small')} />
						<Image
							src={data.image.src}
							alt={data.image.alt}
							width={data.image.src.width}
							height={data.image.src.height}
							blurDataURL={data.image.src.blurDataURL}
							placeholder="blur"
						/>
					</figure>

					<div className={cn(Styles.entry, '')}>
						<h2 className={cn(Styles.title, 'title title_h2')}>{data.title}</h2>
						<div className={cn(Styles.text, 'text text_big')}>{data.text}</div>

						<div id="pay-widget" className={cn(Styles.widget, '')}>
							<span className={cn(Styles.widgetText, 'text text_big')}>Виджет оплаты</span>
							<div className={cn(Styles.widgetScript)}>
								<Iframe
									url="https://babywalks.getcourse.ru/pl/lite/widget/widget?id=984345"
									width="100%"
									height="100%"
									id="4a9710aea2d130dd84f12a3c2c8c6169c09db9ee_797"
									className={cn('absolute left-0 top-0 z-10 h-full w-full')}
									display="block"
									loading="lazy"
									position="relative"
									scrolling="no"
								/>
							</div>
						</div>
					</div>
				</div>

				<figure className={cn(Styles.cloud, 'animate-right-left-scale  [animation-duration:6s]')}>
					<Image
						src={data.cloud.src}
						alt={data.cloud.alt}
						width={data.cloud.src.width}
						height={data.cloud.src.height}
						blurDataURL={data.cloud.src.blurDataURL}
						placeholder="blur"
					/>
				</figure>
			</Container>
		</section>
	);
};

export default Whom;
