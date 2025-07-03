import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="sr-only">헤더영역</h1>
      <Link to={'/'} className="logo" aria-label="스마트농업 정보시스템" />
      <div className="right-area">
        ...
      </div>
    </header>
  )
}

export default Header;
