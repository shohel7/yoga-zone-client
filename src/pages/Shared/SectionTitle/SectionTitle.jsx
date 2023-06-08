import { TbYoga } from "react-icons/Tb";

const SectionTitle = ({ heading, paragraph }) => {
  return (
    <div className="my-10">
      <span className="mx-auto text-center md:w-4/12">
        <h3 className="text-gray-600 text-xl md:text-3xl font-semibold uppercase py-2">
          {heading}
        </h3>
        <div className="divider w-4/12 md:w-2/12 mx-auto">
          <TbYoga className="text-5xl text-[#5FC7AE]" />
        </div>
      </span>
      <p className="text-gray-600 mb-2 mx-auto text-center w-11/12 md:w-8/12">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
