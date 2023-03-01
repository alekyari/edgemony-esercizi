import "./index.css";

const Header = ({ title }) => {
  return (
    <div className="Header">
      <nav>
        <ul className="navbar">
        <li><div className="hamburger"><hr /><hr /><hr /></div></li>
          <li><a href="https://www.amazon.it">Amazon</a></li>
          <li><a href="https://www.ebay.it/">Ebay</a></li>
          <li><a href="https://it.aliexpress.com/">AliExpress</a></li>
          <li><a href="https://it.shein.com/">Shein</a></li>
         </ul>
      </nav>
      <div className="search">
        <ul className="searchbar" ><li>{ title }</li>
        <li><input type="text" placeholder="Search your product here"/></li></ul>
      </div>
    </div>
  );
};

export default Header;
