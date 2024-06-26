// eslint-disable-next-line react/prop-types
const SectionHeader = ({ title, content }) => {
  return (
    <section>
      <div className="line_animation w-[150px] h-[2px] bg-gray-200 mb-1 overflow-hidden shadow-md">
        <div className="bg-orange w-[40px] h-full animate-progress"></div>
      </div>
      <div>
        <h2 className="text-heading-color">{title}</h2>
        {content && <p>{content}</p>}
      </div>
    </section>
  );
};

export default SectionHeader;
