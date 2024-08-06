type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="mx-auto w-full max-w-[1280px]">{children}</div>;
};

export default Container;
