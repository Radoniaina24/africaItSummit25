import ListStudent from "@/app/features/admin/student/list";
import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Students",
};
export default function page() {
  return (
    <DefaultLayout>
      <ListStudent />
    </DefaultLayout>
  );
}
