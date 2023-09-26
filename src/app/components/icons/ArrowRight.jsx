import { cn } from '../../lib/utils';

const ArrowRight = ({ className }) => {
	return (
		<svg
			className={cn(className, 'btnArrow')}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 36 25"
			fill="none"
		>
			<path
				d="M12.8649 12.5H26.4865"
				stroke="#C46026"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M23 8.5L27 12.5L23 16.5"
				stroke="#C46026"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ArrowRight;
