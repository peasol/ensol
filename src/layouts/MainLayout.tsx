import Header from '@/layouts/header/Header.tsx';
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