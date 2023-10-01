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
		<section className={cn(Styles.whom, '')}>
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

						<div className={cn(Styles.widget, '')}>
							<span className={cn(Styles.widgetText, 'text text_big')}>Виджет оплаты</span>
							<div className={cn(Styles.widgetScript)}>
								{/* <Iframe
									url="https://babywalks.getcourse.ru/pl/lite/widget/widget?id=1000431&amp;id=1000431&amp;ref=https%3A%2F%2Fbabywalks.getcourse.ru%2Fpl%2Flite%2Fwidget%2Feditor%3Fid%3D1000431&amp;loc=https%3A%2F%2Fbabywalks.getcourse.ru%2Fpl%2Flite%2Fwidget%2Fshow%3Fid%3D1000431"
									width="100%"
									height="100%"
									id="d4aaac5dffe78a4998fd07edcabe457990256bdf_311"
									className=""
									display="block"
									position="relative"
								/> */}
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
