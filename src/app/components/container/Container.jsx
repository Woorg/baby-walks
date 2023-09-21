import clsx from "clsx";

const Container = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "max-w-7xl m-auto container px-6 lg:px-[30px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
