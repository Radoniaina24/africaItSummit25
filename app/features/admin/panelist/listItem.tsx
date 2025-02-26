import React from "react";
import ViewStudent from "./svg/view";
import Edit from "./svg/edit";

import DeleteButton from "./DeleteButton";
import Image from "next/image";
import Link from "next/link";
import Panelist from "@/app/interface/Panelist";

export default function ListItem({ panelist }: { panelist: Panelist }) {
  const photo = panelist.photo ? (
    <Image
      src={panelist.photo}
      alt={"photo"}
      width={50}
      height={50}
      className="rounded-full"
    />
  ) : (
    ""
  );
  return (
    <tr className="hover:bg-gray cursor-pointer bg-white dark:bg-boxdark  dark:text-white dark:hover:bg-gray-600">
      <th
        scope="row"
        className="whitespace-nowrap border-b border-[#eee] px-6 py-4 font-medium text-gray-900 dark:border-strokedark dark:text-white"
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
          <button className="hover:text-primary">
            <ViewStudent />
          </button>
          <DeleteButton id={panelist._id} />
          <Link href={`/panelist/edit/${panelist._id}`}>
            <Edit />
          </Link>
        </div>
      </td>
    </tr>
  );
}
