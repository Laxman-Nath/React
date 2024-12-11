import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AppLayout = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
