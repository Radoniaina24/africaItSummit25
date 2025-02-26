import ListPanelist from "@/app/features/admin/panelist/list";
import ListStudent from "@/app/features/admin/student/list";
import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Panelist | Africa It Summit",
};
export default function PagePanelist() {
  return (
    <DefaultLayout>
      <ListPanelist />
    </DefaultLayout>
  );
}
