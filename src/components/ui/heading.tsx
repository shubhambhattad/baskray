interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <h2 className="text-3xl font-bold  text-primary sm:text-4xl lg:text-5xl text-center  w-full">
      {title}
    </h2>
  );
};

export default Heading;
