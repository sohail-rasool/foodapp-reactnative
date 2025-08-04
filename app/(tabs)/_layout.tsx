import { RootState } from "@/store/store";
import { Redirect, Slot } from "expo-router";
import { useSelector } from "react-redux";

const Layout = () => {
  const userId = useSelector((state: RootState) => state.app?.user?.id);
  const isAuthenticated = userId;
  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }
  return <Slot />;
};

export default Layout;
