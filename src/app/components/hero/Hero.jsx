import Image from 'next/image';
import { cn } from '../../lib/utils';
import Container from '../container/Container';
import SpinLogo from '@images/general/spin-logo.webp';
import IntroImg from '@images/general/hero/heroImg.webp';
import Styles from './Hero.module.css';

const Hero = () => {
	const data = {
		intro: {
			title: 'Курс по уходу за ребёнком ребёнком от 0 до 12 месяцев',
			text: '<p>Обеспечьте своему малышу наилучший уход! Узнайте все тонкости воспитания новорождённого с помощью подробного руководства на первые 12 месяцев.</p>',
			image: { src: IntroImg, alt: 'Intro image' },
		},
		basic: {
			title:
				'Курс по уходу за ребёнком от 0 до 12 месяцев, сделанный с помощью искусственного интеллекта (ИИ)',
			spin: {
				src: SpinLogo,
				alt: 'Spin logo',
			},
			text: '<p>Развитие ребёнка до года проходит довольно быстро. Нередко внешний вид малыша, его рефлексы, поведение внушают родителям тревогу. Чтобы не тревожиться понапрасну, узнайте об основных «контрольных точках» в развитии ребёнка в возрасте до годика. В ходе курса вы получите ценные сведения, практические рекомендации и научно обоснованные методы по обеспечению правильного становления вашего ребёнка</p>',
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
			<Container
				className={cn(Styles.container, 'pb-10 pt-32 lg:pb-16 lg:pt-24 xl:pt-48 2xl:pb-32')}
			>
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
						<figure className={cn(Styles.spin)}>
							<Image
								src={data.basic.spin.src}
								alt={data.basic.spin.alt}
								width={data.basic.spin.src.width}
								height={data.basic.spin.src.height}
								blurDataURL={data.basic.spin.src.blurDataURL}
								placeholder="blur"
							/>
						</figure>
					</div>
					<div
						className={cn(Styles.basicText, 'text text_big')}
						dangerouslySetInnerHTML={basicText}
					></div>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
