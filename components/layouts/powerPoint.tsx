type PowerPointProps = {
  title: string;
  description: string;
  secondaryDescription?: string;
  bgColor?: string;
  titleTextColor?: string;
  desTextColor?: string;
};

const PowerPoint = ({
  title,
  description,
  secondaryDescription,
  bgColor = "bg-white",
  titleTextColor = "text-(--dark-gray)",
  desTextColor = "text-(--charcoal)",
}: PowerPointProps) => {
  return (
    <section className={`${bgColor} py-30 w-full overflow-hidden`}>
      <div className="max-w-3xl mx-auto flex flex-col space-y-6 justify-center items-center text-center px-6">
        <h1 className={`${titleTextColor} text-[40px] leading-tight`}>
          {title}
        </h1>

        <p className={`${desTextColor} font-medium`}>{description}</p>

        {secondaryDescription && (
          <p className={`${desTextColor} font-medium`}>
            {secondaryDescription}
          </p>
        )}
      </div>
    </section>
  );
};

export default PowerPoint;
