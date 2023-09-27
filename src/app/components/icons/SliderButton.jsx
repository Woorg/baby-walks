const SliderButton = ({ className }) => {
	return (
		<svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="50" height="50" rx="25" fill="currentColor" />
			<path
				d="M21.25 32.5L28.75 25L21.25 17.5"
				stroke="white"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default SliderButton;
