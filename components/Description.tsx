type DescriptionProps = {
  children: React.ReactNode;
};

const Description = ({ children }: DescriptionProps) => {
  return (
    <p className="max-w-[900px] text-start text-lg leading-relaxed text-neutral-600 max-lg:text-center max-sm:text-base max-sm:leading-relaxed">
      {children}
    </p>
  );
};

export default Description;
