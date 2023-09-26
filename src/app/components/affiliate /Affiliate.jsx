import { cn } from '../../lib/utils';
import Container from '../container/Container';
import { FormAffiliate } from '../form/Form';
import { SpinIcon } from '../icons/SpinIcon';
import Styles from './Affiliate.module.css';

const Affiliate = () => {
	const data = {
		title: 'Партнёрская программа',
		list: [
			{
				title: 'Высокий процент комиссии',
				text: 'Мы заботимся о будущем поколении и нам не безразличен самый важный этап в их развитии, который закладывает фундамент для будущего роста. Чтобы большее количество людей увидело наш специально подобранный образовательный материал, мы предлагаем будущим партнерам продвигать наш курс. Через нашу программу каждый человек с платформой может зарабатывать до 50% от всех продаж.',
			},
			{
				title: 'Надёжная техническая поддержка',
				text: 'Наша команда всегда готова прийти на помощь в решении любых вопросов, касающихся работы партнерской программы. Вы никогда не будете одни — будь то технические трудности, вопросы по расчетам или стратегическое планирование. Благодаря быстрой и квалифицированной поддержке, наше сотрудничество будет максимально комфортным и эффективным.',
			},
			{
				title: 'Эксклюзивный контент',
				text: 'Ваши подписчики будут в восторге от качественного и полезного контента, который поможет им в роли родителей. И это, в свою очередь, повысит Вашу репутацию и доверие аудитории.',
			},
		],
	};

	return (
		<section className={cn(Styles.affiliate)}>
			<Container className={cn(Styles.container)}>
				<h2 className={cn(Styles.title, 'title title_h2')}>{data.title}</h2>
				<div className={cn(Styles.row)}>
					<SpinIcon invert={true} className={cn(Styles.spin)} />
					<ul className={cn(Styles.list)}>
						{data.list.map((item, key) => (
							<li key={`__${key}__`} className={cn(Styles.item)}>
								<h3 className={cn(Styles.itemTitle, 'title title_h3')}>{item.title}</h3>
								<div className={cn(Styles.itemText)}>{item.text}</div>
							</li>
						))}
					</ul>
				</div>
				<FormAffiliate className={cn(Styles.form, 'mt-10')} />
			</Container>
		</section>
	);
};

export default Affiliate;
