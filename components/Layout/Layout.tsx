import { usePathname } from "next/navigation";
import React, { ReactNode, useMemo } from "react";
import AdminLayout from "./AdminLayout";
import ClientLayout from "./ClientLayout";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const path = usePathname();

  const SelectedLayout = useMemo(() => {
    return path.startsWith("/admin") ? AdminLayout : ClientLayout;
  }, [path]);

  return <SelectedLayout>{children}</SelectedLayout>;
};

export default React.memo(Layout);
