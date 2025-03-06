import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "@/lib/api/authApi";
import { selectIsAuthenticated, setUser } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthenticated);

  const { data, error } = useGetUserQuery("");
  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
    if (error) {
      // Redirige les utilisateurs non authentifiés vers la page de connexion
      router.replace("/admin/login");
    }
  }, [data, error, dispatch]);
  if (!isAuth) return;
  return <>{children}</>;
};
