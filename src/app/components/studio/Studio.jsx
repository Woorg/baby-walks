import StudioImg from '@images/content/studio-img.webp';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import Container from '../container/Container';
import Styles from './Studio.module.css';

const data = {
	title: 'Описание студии',
	text: '<p>Появление нового члена семьи — радостное, а также ответственное событие, и каждый этап первого года жизни вашего малыша полон открытий. Чтобы не потеряться в этом мире новых вопросов, представляем эксклюзивный курс «Курс по воспитанию ребёнка от 0–12 месяцев, разработанный с помощью искусственного интеллекта». Здесь вы найдёте научно подкреплённые методы и практические рекомендации для каждого этапа развития, получите индивидуализированный подход благодаря адаптивной технологии ИИ и станете частью нового поколения родителей, которые смело применяют передовые технологии для блага своих детей. Узнайте полное объяснение «контрольных точек» в развитии вашего малыша и почувствуйте уверенность в своих решениях. Не упустите шанс сделать первый год жизни вашего ребёнка максимально полезным и безопасным — вложитесь в его будущее сегодня!</p>',
	image: {
		src: StudioImg,
		alt: 'Описание студии',
	},
};
const Studio = () => {
	return (
		<section className={cn(Styles.studio)}>
			<Container className={cn(Styles.container)}>
				<h2 className={cn(Styles.title, 'title title_h2')}>{data.title}</h2>
				<div className={cn(Styles.row)}>
					<div
						className={cn(Styles.text, 'text text_big')}
						dangerouslySetInnerHTML={{ __html: data.text }}
					/>
					<figure className={cn(Styles.image)}>
						<Image
							src={data.image.src}
							alt={data.image.alt}
							width={data.image.width}
							height={data.image.height}
							blurDataURL={data.image.blurDataURL}
							placeholder="blur"
						/>
					</figure>
				</div>
			</Container>
		</section>
	);
};

export default Studio;
