import FormStudent from "@/app/features/admin/student/FormStudent";
import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Add-students",
};
export default function page() {
  return (
    <div>
      <Breadcrumb pageName={"Edit student"} />
      <div className="shadow-default dark:bg-boxdark rounded-sm border border-stroke bg-white  px-5 py-5 dark:border-strokedark">
        <FormStudent />
      </div>
    </div>
  );
}
