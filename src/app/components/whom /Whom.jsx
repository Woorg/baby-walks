'use client';

import Script from 'next/script';
import { cn } from '../../lib/utils';
import Container from '../container/Container';
import Styles from './Whom.module.css';
import Iframe from 'react-iframe';
import Cloud from '@images/general/cloud.webp';
import WhomImg from '@images/general/whom/whoImg.webp';
import Image from 'next/image';
import { SpinIcon } from '../icons/SpinIcon';

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
						<SpinIcon className={cn(Styles.spin)} />
						<Image
							src={data.image.src}
							alt={data.image.alt}
							width={data.image.src.width}
							height={data.image.src.height}
							blurDataURL={data.image.src.blurDataURL}
							placeholder="blur"
						/>
					</figure>

					<div className={cn(Styles.entry, 'ml-auto w-full max-w-[667px]')}>
						<h2 className={cn(Styles.title, 'title title_h2')}>{data.title}</h2>
						<div className={cn(Styles.text, 'text text_big')}>{data.text}</div>

						<div className={cn(Styles.widget, '')}>
							<span className={cn(Styles.widgetText, 'text text_big')}>Виджет оплаты</span>
							<div className={cn(Styles.widgetScript)}>
								{/* <Iframe
								url="https://testgorlov.getcourse.ru/pl/lite/widget/widget?id=1005765&amp;id=1005765&amp;ref=https%3A%2F%2Ftestgorlov.getcourse.ru%2Fpl%2Flite%2Fwidget%2Feditor%3Fid%3D1005765&amp;loc=https%3A%2F%2Ftestgorlov.getcourse.ru%2Fpl%2Flite%2Fwidget%2Fshow%3Fid%3D1005765"
								width="100%"
								height="100%"
								id="08c44908d98c818ac6f41436f411cb3cfe8064f9_954"
								className=""
								display="block"
								position="relative"
							/> */}
							</div>
						</div>
					</div>
				</div>

				<figure className={cn(Styles.cloud)}>
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
