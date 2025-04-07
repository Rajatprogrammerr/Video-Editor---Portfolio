import { checklistItems } from "../constant";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-md font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-6xl  font-bold mt-10   text-white">Easily build</h2>
        {" "}
        <span className="bg-gradient-to-r text-6xl from-orange-500 to-orange-800 text-transparent bg-clip-text">
          your code
        </span>

      </div>
      <div className=" mt-10 w-full flex justify-center flex-col items-center gap-10">
        {checklistItems.map((item, index) => (
          <div key={index} className="  ">

            <h5 className="mt-1 mb-6 text-4xl text-white font-bold">{item.title}</h5>
            <p className="text-xl  mb-20 text-slate-700">
              {item.description}
            </p>

          </div>
        ))}
      </div>
    </div >
  );
};

export default FeatureSection;