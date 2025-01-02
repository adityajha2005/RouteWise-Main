type HeadingProps = {
  title: string;
  description: string;
};

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="text-center space-y-4 my-4">
      <h2 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-4xl">
        {title}
      </h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Heading;
