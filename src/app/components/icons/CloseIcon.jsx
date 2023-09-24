const CloseIcon = ({ className }) => {
	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
			<path
				d="M24 8L8 24"
				stroke="#F3EFEB"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M8 8L24 24"
				stroke="#F3EFEB"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default CloseIcon;
