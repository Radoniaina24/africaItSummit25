import React from "react";

import DeleteButton from "./DeleteButton";
import Image from "next/image";
import Panelist from "@/app/interface/Panelist";
import ViewPanelist from "./ViewPanelist";

export default function ListItem({ panelist }: { panelist: Panelist }) {
  const photo = panelist.photo ? (
    <img
      src={panelist.photo}
      alt={"photo"}
      className="h-15 w-15 rounded-full border-4 border-gray-200 object-cover "
    />
  ) : (
    ""
  );
  return (
    <tr className="hover:bg-gray cursor-pointer bg-white dark:bg-boxdark  dark:text-white dark:hover:bg-gray-600">
      <th
        scope="row"
        className="hidden whitespace-nowrap border-b border-[#eee] px-6 py-4 font-medium text-gray-900 dark:border-strokedark dark:text-white md:block"
      >
        {photo}
      </th>
      <th
        scope="row"
        className="whitespace-nowrap border-b border-[#eee] px-6 py-4 font-medium text-gray-900 dark:border-strokedark dark:text-white"
      >
        {panelist.name}
      </th>
      <td className="border-b border-[#eee] px-6 py-4 dark:border-strokedark">
        {panelist.email}
      </td>
      <td className="border-b border-[#eee] px-6 py-4 dark:border-strokedark">
        {panelist.organization}
      </td>
      <td className=" border-b border-[#eee] px-4 py-5 dark:border-strokedark">
        <div className="flex items-center space-x-3.5">
          <ViewPanelist profile={panelist} />
          <DeleteButton id={panelist._id} />
        </div>
      </td>
    </tr>
  );
}
