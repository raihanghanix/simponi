type SubheadingProps = {
  children: React.ReactNode;
};

const Subheading = ({ children }: SubheadingProps) => {
  return (
    <h2 className="text-start text-3xl font-bold leading-tight max-lg:text-center max-sm:text-2xl max-sm:leading-tight">
      {children}
    </h2>
  );
};

export default Subheading;
