import { Outlet } from "react-router";

const SubLayout = () => {
  return (
    <>
      <div className="wrap">
        <Outlet />
      </div>
    </>
  )
}

export default SubLayout;