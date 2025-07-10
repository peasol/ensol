import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="gnb-header">
      <h1>
	      <Link to={'/'} className="logo" aria-label="LG ES Guide">DAVINCI SCHEDULER</Link>
      </h1>

      <div className="right-area">
        ...
      </div>
    </header>
  )
}

export default Header;
