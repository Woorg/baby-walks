import { cn } from '../../lib/utils';
import Container from '../container/Container';
import Styles from './Whom.module.css';

const Whom = () => {
	const data = {
		title: 'Кого мы ждём на курсе?',
		text: 'На курсе мы ждём абсолютно всех, кто хочет разобраться в одной из самых важных стадий развития ребёнка от 0–12 месяцев!',
	};

	return (
		<section className={cn(Styles.whom, '')}>
			<Container className={cn(Styles.container)}>
				<h2 className={cn(Styles.title, 'title title_h2')}>{data.title}</h2>
			</Container>
		</section>
	);
};

export default Whom;
