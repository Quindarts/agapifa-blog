import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">AGAPIFA</div>
      <nav>
        <a href="/">TRANG CHỦ</a>
        <a href="/">DANH MỤC</a>
        <a href="/">BLOG</a>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="icons">
        <span className="icon">🔔</span>
        <span className="icon">👤</span>
      </div>
    </header>
  );
}

export default Header;
