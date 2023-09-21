import Container from '../container/Container';

const Footer = () => {
	return (
		<footer className="bg-neutral-950 py-12 text-white">
			<Container>
				<p className="text-center text-sm">
					© {new Date().getFullYear()} Studio Clone. All rights reserved.
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
