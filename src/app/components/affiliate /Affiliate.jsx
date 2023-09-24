import { cn } from '../../lib/utils';
import Container from '../container/Container';
import Styles from './Affiliate.module.css';

const Affiliate = () => {
	const data = {
		title: 'Партнёрская программа',
	};

	return (
		<section className={cn(Styles.affiliate)}>
			<Container className={cn(Styles.container)}>
				<h2 className={cn(Styles.title, 'title title_h2')}>{data.title}</h2>
			</Container>
		</section>
	);
};

export default Affiliate;
