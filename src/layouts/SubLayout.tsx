import { useState } from 'react';
import Header from '@/layouts/nav/Header';
import Sidebar from '@/layouts/nav/Sidebar.tsx';
import { Outlet } from "react-router";

const SubLayout = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isSidebarMin, setIsSidebarMin] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarMin(prev => !prev);
    // 사이드바 최소화되면 열린 서브메뉴 초기화
    if (!isSidebarMin) {
      setOpenIndex(null);
    }
  };

  return (
    <div className={`wrap${isSidebarMin ? ' sidebar-min-layout' : ''}`}>
      <Sidebar
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        isSidebarMin={isSidebarMin}
      />
      <div className="sub-container">
        <Header onToggleSidebar={handleToggleSidebar} />
        <Outlet />
      </div>
    </div>
  )
}

export default SubLayout;