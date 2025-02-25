import FormStudent from "@/app/features/admin/student/FormStudent";
import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Add-students",
};
export default function page() {
  return (
    <DefaultLayout>
      <div>
        <Breadcrumb pageName={"Add student"} />
        <div className="shadow-default rounded-sm border border-stroke bg-white px-5  py-5">
          <FormStudent />
        </div>
      </div>
    </DefaultLayout>
  );
}
