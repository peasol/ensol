import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

interface Props {
  onToggleSidebar?: () => void; 
}

const Header = ({ onToggleSidebar }: Props) => {
  const [isMyOpen, setIsMyOpen] = useState(false);
  const myBlockRef = useRef<HTMLDivElement>(null);

  const toggleMyLayer = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMyOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (myBlockRef.current && !myBlockRef.current.contains(e.target as Node)) {
        setIsMyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <h1 className="sr-only">헤더영역</h1>
      <Link to={'/'} className="logo" aria-label="스마트농업 정보시스템" />
      <button
        type="button"
        className="menu-sidebar"
        onClick={e => {
          e.preventDefault();
          onToggleSidebar?.();
        }}
      />
      <div className="right-area">
        <div className="weather-info">
          <div className="weather">
            <i className="ic-cloud" aria-label="구름"/>
            <span aria-label="현재 온도">25°C</span>
          </div>
          <div className="t-change">
            <div className="up"><i className="ic-up"/><span aria-label="최고">30°</span></div>
            <div className="down"><i className="ic-down"/><span aria-label="최저">18°</span></div>
          </div>
          <div className="date">
            <span className="today">6월12일 목요일</span>
            <span>· 구름 많음</span>
          </div>
        </div>
        <div className="box-block">
          <div>
            <i className="ic-sunrise"/>
            <span aria-label="일출">5:10</span>
          </div>
          <div>
            <i className="ic-sunset"/>
            <span aria-label="일몰">19:53</span>
          </div>
          <div>
            <i className="ic-precipitation"/>
            <span aria-label="강수">20mm</span>
          </div>
        </div>
        <div className="my-block" ref={myBlockRef}>
          <a href="#a">
            <i className="ic-cal" aria-label="할일"/>
            <span className="num">3</span>
          </a>
          <a href="#a">
            <i className="ic-alarm" aria-label="알람"/>
            <span className="num">5</span>
          </a>
          <div className="my-wrap">
            <a
              href="#"
              onClick={toggleMyLayer}
              className={`my-profile ${isMyOpen ? 'active' : ''}`}
              aria-expanded={isMyOpen}
            >
              <div className="img-area">
                {/* 프로필 이미지 위치 */}
              </div>
              <i className="btn-ar"/>
            </a>
            <div className="my-layer">
              ...
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
