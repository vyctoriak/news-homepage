import './NavBar.scss';
import logo from '../../assets/images/logo.svg';

function NavBar() {
  return (
    <nav className="navbar__wrapper">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navegation">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  );
}

export default NavBar;
