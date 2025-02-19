import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import { PricingPlan } from "@/types/pass";

// const PassItem = ({ featureTab }: { featureTab: FeatureTab }) => {
//   const { title, desc1, desc2, image } = featureTab;
//   return (
//     <>
//       <div className="flex items-center gap-8 lg:gap-19">
//         <div className="md:w-1/2">
//           <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
//             {title}
//           </h2>
//           <p className="mb-5">{desc1}</p>
//           <p className="w-11/12">{desc2}</p>
//         </div>
//         <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
//           <Image src={image} alt={title} fill />
//         </div>
//       </div>
//     </>
//   );
// };

// export default PassItem;

export const PassItem = ({ pass }: { pass: PricingPlan }) => {
  const { tarif, price, normalPrice, title, description, features, isPopular } =
    pass;
  return (
    <div
      className={`animate_top group relative rounded-lg border border-x-4 border-y-4  border-[#D34FAC]  bg-white p-7.5 shadow-solid-10  xl:p-12.5 ${
        isPopular ? "relative" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute -right-3.5 top-7.5 -rotate-90 transform rounded-bl-full rounded-tl-full bg-gradient-to-r from-[#D34FAC] to-[#562196] px-4.5 py-1.5 text-metatitle font-medium uppercase text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Popular
        </div>
      )}
      <div className="text-center ">
        <h3 className=" bg-gradient-to-r from-[#0796F5] via-[#D34FAC] to-[#562196] bg-clip-text text-2xl font-bold text-transparent lg:text-3xl  ">
          {title}
        </h3>
        <h3 className="text-xl font-bold text-black lg:text-2xl  ">{tarif}</h3>
        <h3 className="  text-lg font-bold  text-indigo-400 line-through  ">
          {normalPrice ? "€" + normalPrice : ""}
        </h3>
        <h3 className="mb-7.5 text-3xl font-bold text-black  ">
          {price ? "€" + price : ""}
          <span className="text-regular text-waterloo ">
            {" "}
            {price ? "TTC / pass" + price : ""}{" "}
          </span>
        </h3>
      </div>

      <p className="text-lead text-lg">{description}</p>

      <div className="d mt-9 border-t border-stroke   pb-12.5">
        <ul className="divide-y divide-gray-200">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`md:text-md flex items-center justify-between py-2 text-black lg:text-lg ${
                feature.isAvailable ? "" : "opacity-40"
              } last:mb-0 `}
            >
              {feature.text}
              <div>{feature.icon}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* <button
        aria-label="Get the Plan button"
        className="group/btn inline-flex transform items-center gap-2 rounded-full bg-gradient-to-r from-[#D34FAC] to-[#562196] px-4 py-1.5 font-medium text-white shadow-lg transition-all duration-300  hover:shadow-xl"
      >
        <span className="">Get your pass</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
            fill="currentColor"
          />
        </svg>
      </button> */}
    </div>
  );
};
