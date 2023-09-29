'use client';

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
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '../../lib/utils';
import Container from '../container/Container';
import Styles from './Testimonials.module.css';
import 'swiper/css';
import CloudImg from '@images/general/cloud.webp';
import SliderButton from '../icons/SliderButton';

const Testimonials = () => {
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
		cloud: {
			src: CloudImg,
			alt: 'cloud ',
		},
	};

	return (
		<section id="testimonials" className={cn(Styles.testimonials)}>
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
							prevEl: '.slider-button_prev',
							nextEl: '.slider-button_next',
						}}
					>
						<div className={cn(Styles.nav, '')}>
							<button
								className={cn(Styles.sliderPrev, 'slider-button slider-button_prev')}
								aria-label="Назад"
							>
								<SliderButton className={cn('')} />
							</button>
							<button
								className={cn(Styles.sliderNext, 'slider-button slider-button_next')}
								aria-label="Вперед"
							>
								<SliderButton className={cn('')} />
							</button>
						</div>

						{data.slider.map((slide, key) => (
							<SwiperSlide key={`__${key}__`} className={cn(Styles.sliderSlide, 'px-2 lg:px-2')}>
								<figure className={cn(Styles.sliderImage, '')}>
									<Image
										className={cn(Styles.image, 'block')}
										src={slide.image.src}
										alt={slide.image.alt}
										width={slide.image.src.width}
										height={slide.image.src.height}
										priority
										// blurDataURL={slide.image.src.blurDataURL}
										// placeholder="blur"
									/>
								</figure>
							</SwiperSlide>
						))}
					</Swiper>
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

export default Testimonials;
