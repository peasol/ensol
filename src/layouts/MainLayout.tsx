import Header from '@/layouts/nav/Header';
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout;