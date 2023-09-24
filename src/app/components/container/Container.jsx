import clsx from 'clsx';

const Container = ({ className, children }) => {
	return <div className={clsx('max-w-8xl container ', className)}>{children}</div>;
};

export default Container;
