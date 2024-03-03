import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

interface ProviderProps {
  children: ReactNode;
}

const Providers: FC<ProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuth = localStorage.getItem("userData");
  // const isAuthBoolean = Boolean(isAuth);
  // console.log(isAuthBoolean);
  // console.log(!isAuth);

  useEffect(() => {
    // if (!!isAuth && pathname === "/") {
    //   navigate("/home");
    // } else if (!!isAuth && pathname === "/registration") {
    //   navigate("/");
    // } else if (isAuth && pathname === "/home") {
    //   navigate("/");
    // } else if (isAuth && pathname === "/registration") {
    //   navigate("/");
    // }
  }, [pathname, isAuth, navigate]);

  return children;
};

export default Providers;
