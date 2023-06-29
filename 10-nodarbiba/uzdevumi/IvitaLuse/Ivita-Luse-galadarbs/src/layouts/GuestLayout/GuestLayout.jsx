import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const GuestLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default GuestLayout;
