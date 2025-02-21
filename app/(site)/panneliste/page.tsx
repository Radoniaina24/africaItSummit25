import React from "react";
import { Metadata } from "next";
import Panneliste from "@/app/features/Panneliste";

export const metadata: Metadata = {
  title: "Panneliste | Africa It Summit",
  // other metadata
};

const PagePanneliste = () => {
  return <Panneliste />;
};

export default PagePanneliste;
