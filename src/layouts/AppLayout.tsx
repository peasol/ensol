import { Outlet, useLocation } from 'react-router-dom';
import { Fragment } from 'react';

const AppLayout = () => {
  const { pathname } = useLocation();
  const isPublishingRoute = pathname.startsWith('/publishing');

  return (
    <Fragment>
      {!isPublishingRoute && (
        <div className="h-[100vh] bg-[#F8FBFF]">
          <header className="header">
	          <a href="#" className="logo" aria-label="LG ESGuide">LG ES Sample Guide</a>
          </header>
          <a
            href="/publishing"
            className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center leading-[1.1] bg-white w-[180px] h-[60px] text-[18px] text-[#2d7cdc] rounded-[24px] shadow-[12px_24px_50px_-11.63px_rgba(22,52,80,0.15)]"
          >
            퍼블리싱 목록
          </a>
        </div>
      )}
      <Outlet />
    </Fragment>
  )
}

export default AppLayout;