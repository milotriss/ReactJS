import HeaderLogin from "../headerLogin/headerLogin";
import Nav from "../nav/nav";
import "./header.css"


function Header():JSX.Element {
  return (
    <header>
      <div className="logo">
        <img src="/asset/img/logo.jpg" alt="" />
        <span>Lasles<strong>VPN</strong></span>
      </div>
      <Nav/>
      <HeaderLogin/>
    </header>
  );
}
export default Header;
