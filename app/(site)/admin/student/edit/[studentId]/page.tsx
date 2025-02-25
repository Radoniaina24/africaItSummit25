"use client";

import FormStudent from "@/app/features/admin/student/FormStudent";
import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import { useGetStudentByIdQuery } from "@/lib/api/studentApi";
import React from "react";
export default function Page({ params }: { params: { studentId: string } }) {
  const { data, isLoading, error } = useGetStudentByIdQuery(params.studentId);
  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement des données.</p>;
  return (
    <div>
      <Breadcrumb pageName={"Edit student"} />
      <div className="shadow-default rounded-sm border border-stroke bg-white px-5  py-5 ">
        {data.student && <FormStudent studentEdit={data.student} />}
      </div>
    </div>
  );
}
