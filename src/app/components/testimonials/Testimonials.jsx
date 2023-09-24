'use client';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import Container from '../container/Container';
import Styles from './Testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Img1 from '@images/content/testimonials/testimImg-1.webp';
import Img2 from '@images/content/testimonials/testimImg-2.webp';
import Img3 from '@images/content/testimonials/testimImg-3.webp';
import Img4 from '@images/content/testimonials/testimImg-4.webp';
import Img5 from '@images/content/testimonials/testimImg-5.webp';
import Img6 from '@images/content/testimonials/testimImg-6.webp';
import Img7 from '@images/content/testimonials/testimImg-7.webp';
import Img8 from '@images/content/testimonials/testimImg-8.webp';
import Img9 from '@images/content/testimonials/testimImg-9.webp';
import Img10 from '@images/content/testimonials/testimImg-10.webp';
import 'swiper/css';
import SliderButton from '../icons/SliderButton';
import { useRef } from 'react';

const Testimonials = () => {
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	const data = {
		title: 'Отзывы',
		slider: [
			{
				image: {
					src: Img1,
					alt: 'отзыв 1',
				},
			},
			{
				image: {
					src: Img2,
					alt: 'отзыв 2',
				},
			},
			{
				image: {
					src: Img3,
					alt: 'отзыв 3',
				},
			},
			{
				image: {
					src: Img4,
					alt: 'отзыв 4',
				},
			},
			{
				image: {
					src: Img5,
					alt: 'отзыв 5',
				},
			},
			{
				image: {
					src: Img6,
					alt: 'отзыв 6',
				},
			},
			{
				image: {
					src: Img7,
					alt: 'отзыв 7',
				},
			},
			{
				image: {
					src: Img8,
					alt: 'отзыв 8',
				},
			},
			{
				image: {
					src: Img9,
					alt: 'отзыв 9',
				},
			},
			{
				image: {
					src: Img10,
					alt: 'отзыв 10',
				},
			},
		],
	};

	return (
		<section className={cn(Styles.testimonials)}>
			<Container className={cn(Styles.container)}>
				<h2 className={cn(Styles.title, 'title title_h2 ')}>{data.title}</h2>

				<div className={cn(Styles.slider)}>
					<Swiper
						className={cn(Styles.swiper)}
						modules={[Navigation]}
						spaceBetween={0}
						breakpoints={{
							0: {
								slidesPerView: 'auto',
							},

							// 1024: {
							// 	slidesPerView: 1.3,
							// },
							// 1280: {
							// 	slidesPerView: 1.6,
							// },
						}}
						navigation={{
							prevEl: navigationPrevRef.current,
							nextEl: navigationNextRef.current,
						}}
						onSwiper={(swiper) => {
							// Delay execution for the refs to be defined
							setTimeout(() => {
								// Override prevEl & nextEl now that refs are defined
								swiper.params.navigation.prevEl = navigationPrevRef.current;
								swiper.params.navigation.nextEl = navigationNextRef.current;

								// Re-init navigation
								swiper.navigation.destroy();
								swiper.navigation.init();
								swiper.navigation.update();
							});
						}}
					>
						<div className={cn(Styles.nav, 'w-36 lg:w-auto')}>
							<button className={cn(Styles.sliderPrev)} aria-label="Назад" ref={navigationPrevRef}>
								<SliderButton className={cn('h-16 w-16')} />
							</button>
							<button className={cn(Styles.sliderNext)} aria-label="Вперед" ref={navigationNextRef}>
								<SliderButton className={cn('h-16 w-16')} />
							</button>
						</div>

						{data.slider.map((slide, key) => (
							<SwiperSlide key={`__${key}__`} className={cn(Styles.sliderSlide, 'px-2 lg:px-2')}>
								<figure
									className={cn(
										Styles.sliderImage,
										'mb-2 flex-shrink-0 flex-grow-0 lg:mb-0 lg:w-[487px] lg:flex-shrink',
									)}
								>
									<Image
										className={cn(Styles.image, 'hidden lg:block')}
										src={slide.image.src}
										alt={slide.image.alt}
										width={slide.image.src.width}
										height={slide.image.src.height}
										blurDataURL={slide.image.src.blurDataURL}
										placeholder="blur"
									/>
								</figure>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Container>
		</section>
	);
};

export default Testimonials;
