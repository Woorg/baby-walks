import CloudImg from '@images/general/cloud.webp';
import Clouds from '@images/general/hero/heroClouds.webp';
import IntroImg from '@images/general/hero/heroImg.webp';
import BabyImg from '@images/general/hero/heroImgBaby.webp';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import Button from '../button/Button';
import Container from '../container/Container';
import { SpinIcon } from '../icons/SpinIcon';
import Styles from './Hero.module.css';

const Hero = () => {
	const data = {
		intro: {
			title: 'Курс по уходу за ребёнком от 0 до 12 месяцев',
			text: '<p>Обеспечьте своему малышу наилучший уход! Узнайте все тонкости воспитания новорождённого с помощью подробного руководства на первые 12 месяцев.</p>',
			image: { src: IntroImg, alt: 'Intro image' },
		},
		cloud: {
			src: CloudImg,
			alt: 'cloud',
		},
		clouds: {
			src: Clouds,
			alt: 'clouds',
		},
		basic: {
			title:
				'Курс по уходу за ребёнком от 0 до 12 месяцев, сделанный с помощью искусственного интеллекта (ИИ)',
			babyImg: {
				src: BabyImg,
				alt: 'baby image',
			},
			text: '<p>Развитие ребёнка до года проходит довольно быстро. Нередко внешний вид малыша, его рефлексы, поведение внушают родителям тревогу. Чтобы не тревожиться понапрасну, узнайте об основных «контрольных точках» в развитии ребёнка в возрасте до годика. В ходе курса вы получите ценные сведения, практические рекомендации и научно обоснованные методы по обеспечению правильного становления вашего ребёнка</p>',
			button: {
				link: 'pay-widget',
				text: 'Присоединиться',
			},
		},
	};

	const introText = {
		__html: data.intro.text,
	};

	const basicText = {
		__html: data.basic.text,
	};

	return (
		<section className={cn(Styles.hero)}>
			<Container className={cn(Styles.container, '')}>
				<figure className={cn(Styles.cloudTop)}>
					<Image
						src={data.cloud.src}
						alt={data.cloud.alt}
						width={data.cloud.src.width}
						height={data.cloud.src.height}
						blurDataURL={data.cloud.src.blurDataURL}
						placeholder="blur"
					/>
				</figure>
				<div className={cn(Styles.intro)}>
					<div className={cn(Styles.introEntry)}>
						<h1 className={cn(Styles.title, 'title')}>{data.intro.title}</h1>
						<div className={cn(Styles.text, 'text text_big')} dangerouslySetInnerHTML={introText} />
					</div>
					<figure className={cn(Styles.introImg)}>
						<Image
							src={data.intro.image.src}
							alt={data.intro.image.alt}
							width={data.intro.image.src.width}
							height={data.intro.image.src.height}
							blurDataURL={data.intro.image.src.blurDataURL}
							placeholder="blur"
						/>
					</figure>
				</div>

				<div className={cn(Styles.basic, '')}>
					<div className={cn(Styles.basicHeading)}>
						<h2 className={cn(Styles.basicTitle, 'title title_h2 ')}>{data.basic.title}</h2>

						<SpinIcon className={cn(Styles.spin, 'spin-logo_small')} />
					</div>

					<div className={cn(Styles.basicRow)}>
						<figure className={cn(Styles.basicImg)}>
							<Image
								src={data.basic.babyImg.src}
								alt={data.basic.babyImg.alt}
								width={data.basic.babyImg.src.width}
								height={data.basic.babyImg.src.height}
								blurDataURL={data.basic.babyImg.src.blurDataURL}
								placeholder="blur"
							/>
						</figure>
						{/* <div className={cn(Styles.basicEntry)}> */}
						<div
							className={cn(Styles.basicText, 'text ')}
							dangerouslySetInnerHTML={basicText}
						></div>
						<Button
							smooth={true}
							spy={true}
							hashSpy={true}
							offset={-72}
							href={data.basic.button.link}
							className={cn(
								Styles.basicButton,
								'btn btn_general btn_anim btn_anim_reverse btn_icon',
							)}
							arrow={true}
						>
							{data.basic.button.text}
						</Button>
						{/* </div> */}
					</div>
				</div>

				<figure
					className={cn(Styles.cloudLeft, 'animate-up-down-left-right [animation-duration:6s]')}
				>
					<Image
						src={data.cloud.src}
						alt={data.cloud.alt}
						width={data.cloud.src.width}
						height={data.cloud.src.height}
						blurDataURL={data.cloud.src.blurDataURL}
						placeholder="blur"
					/>
				</figure>

				<figure
					className={cn(
						Styles.cloudRight,
						'animate-up-down-left-right-scale [animation-duration:6s]',
					)}
				>
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

			<figure className={cn(Styles.clouds, 'animate-marquee [animation-duration:64s]')}>
				<Image
					className={cn('')}
					src={data.clouds.src}
					alt={data.clouds.alt}
					width={data.clouds.src.width}
					height={data.clouds.src.height}
					blurDataURL={data.clouds.src.blurDataURL}
					placeholder="blur"
				/>
				{/* <Image
					src={data.clouds.src}
					alt={data.clouds.alt}
					width={data.clouds.src.width}
					height={data.clouds.src.height}
					blurDataURL={data.clouds.src.blurDataURL}
					placeholder="blur"
				/> */}
			</figure>
		</section>
	);
};

export default Hero;
