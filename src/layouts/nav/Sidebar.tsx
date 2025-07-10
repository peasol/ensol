import { useState, useEffect, MouseEvent, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  openIndex: number | null;
  setOpenIndex: Dispatch<SetStateAction<number | null>>;
  isSidebarMin: boolean;
}

const Sidebar = ({ openIndex, setOpenIndex, isSidebarMin }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (idx: number, e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpenIndex(prev => (prev === idx ? null : idx));
  };
    
  // 사이드바 최소화 상태가 바뀔 때 열린 메뉴 초기화
  useEffect(() => {
    if (isSidebarMin && isHovered) {
      setOpenIndex(null);
    }
  }, [isSidebarMin, isHovered, setOpenIndex]);

  return (
    <div
      className={`sidebar${isHovered ? ' wide' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="sr-only">사이드바영역</h1>
      <div className="logo-w" aria-label="스마트농업 정보시스템"></div>

      <nav className="nav-menu">
        <ul className="depth1">
          <li className="no-child">
            <a href="#">
              <i className="ic-dashboard" />
              <span className="txt">대시보드</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={openIndex === 1 ? 'opened' : ''}
              onClick={e => handleClick(1, e)}
            >
              <i className="ic-potted-plant" />
              <span className="txt">생육진단</span>
            </a>
            {openIndex === 1 && (
              <ul className="depth2">
                <li><Link to="#">생육 상황판</Link></li>
                <li><Link to="#">생육 데이터 분석</Link></li>
                <li><Link to="#">처방 및 권장사항</Link></li>
                <li><Link to="#">AI 예측 결과</Link></li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#"
              className={openIndex === 2 ? 'opened' : ''}
              onClick={e => handleClick(2, e)}
            >
              <i className="ic-water-manage" />
              <span className="txt">지능관수</span>
            </a>
            {openIndex === 2 && (
              <ul className="depth2">
                <li><Link to="#">관수 상황판</Link></li>
                <li><Link to="#">관수 스케줄 관리</Link></li>
                <li><Link to="#">관수 시설 관리</Link></li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#"
              className={openIndex === 3 ? 'opened' : ''}
              onClick={e => handleClick(3, e)}
            >
              <i className="ic-bug-report" />
              <span className="txt">방제관리</span>
            </a>
            {openIndex === 3 && (
              <ul className="depth2">
                <li><Link to="#">방제관리</Link></li>
                <li><Link to="#">병해충/농약 정보</Link></li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#"
              className={openIndex === 4 ? 'opened' : ''}
              onClick={e => handleClick(4, e)}
            >
              <i className="ic-agriculture" />
              <span className="txt">농기계임대</span>
            </a>
            {openIndex === 4 && (
              <ul className="depth2">
                <li><Link to="#">농기계</Link></li>
                <li><Link to="#">작업요청</Link></li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#"
              className={openIndex === 5 ? 'opened' : ''}
              onClick={e => handleClick(5, e)}
            >
              <i className="ic-pager" />
              <span className="txt">영농일지</span>
            </a>
            {openIndex === 5 && (
              <ul className="depth2">
                <li><Link to="#">캘린더</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Sidebar;
