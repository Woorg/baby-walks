import Cloud from '@images/general/cloud.webp';
import ProgramImg from '@images/general/program/programImg.webp';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import Container from '../container/Container';
import { SpinIcon } from '../icons/SpinIcon';
import Styles from './Program.module.css';

const Program = () => {
	const data = {
		title: 'Программа',
		list: [
			{
				title: 'Введение',
				text: 'Мы узнаем о важных аспектах ухода в первые месяцы ребёнка: бережное обращения, основы кормления, экспертные методики использования молокоотсоса, формирование режима сна и решение основных проблем в уходе. Этот раздел создан на основе научных исследований и проверенных практик. Не просто информация, а инструкция к действию!',
			},
			{
				title: 'Быстрый рост: Месяцы 4–7',
				text: 'Этот раздел поможет Вам пройти путь активного роста малыша максимально комфортно и продуктивно. Вы получите чек-лист родительских правил и список ключевых предметов первой необходимости, узнаете о режиме питания и сна ребёнка, погрузитесь в тонкости физического и эмоционального развития младенца, разберитесь с тревожным поведением и особенностями прорезывания зубов.',
			},
			{
				title: 'Новый тип задач, которые необходимо решить',
				text: 'В этом разделе Вы найдёте ответы на самые сложные вопросы, которые не найдёте в обычных руководствах. Мы перейдём к более сложным вопросам родительства. Мастер-класс по усмирению суетливого малыша, научно-обоснованные методики стимуляции речевого развития, подробные рекомендации по формированию полезных привычек и решению возможных проблем роста.',
			},
			{
				title: 'Замечательное достижение, Вы сделали это!',
				text: 'Мы подведём итоги и расскажем о полезных лайфхаках, которые облегчат материнство, Как правильно ухаживать за ребёнком в разные сезоны и какие есть эффективные способы предотвращения укусов насекомых. Подарим рекомендации по уходу в период болезни и советы по путешествию с малышом от экспертов. Этот раздел поможет усовершенствовать навыки и подготовит Вас к новым сложным задачам.',
			},
		],
		// spin: {
		// 	src
		// }
		image: {
			src: ProgramImg,
			alt: 'image',
		},
		cloud: {
			src: Cloud,
			alt: 'cloud',
		},
	};
	return (
		<section id="program" className={cn(Styles.program)}>
			<Container className={cn(Styles.container)}>
				<h2 className={cn(Styles.title, 'title title_h2')}>{data.title}</h2>

				<div className={cn(Styles.row)}>
					<ul className={cn(Styles.list)}>
						{data.list.map((item, key) => (
							<li key={`__${key}__`} className={cn(Styles.item)}>
								<div className={cn(Styles.num)}>{`0${key + 1}`}</div>
								<div className={cn(Styles.entry)}>
									<h3 className={cn(Styles.entryTitle, 'title title_h3')}>{item.title}</h3>
									<div className={cn(Styles.entryText, 'text')}>{item.text}</div>
								</div>
							</li>
						))}
					</ul>

					<div className={cn(Styles.images)}>
						<SpinIcon invert={false} className={cn(Styles.spin, 'spin-logo_micro')} />

						<figure className={cn(Styles.image)}>
							<Image
								src={data.image.src}
								alt={data.image.alt}
								width={data.image.src.width}
								height={data.image.src.height}
								blurDataURL={data.image.src.blurDataURL}
								placeholder="blur"
							/>
						</figure>
						<figure
							className={cn(Styles.cloud, 'animate-right-left-scale  [animation-duration:6s]')}
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
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Program;
