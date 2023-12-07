import "./footerInformation.css"

const FooterInfo = () => {
  return (
    <div className="footerInfo">
      <div className="logoFooter">
        <img src="/asset/img/logo.jpg" alt="" />
        <span>Lasles<strong>VPN</strong></span>
      </div>
      <p><strong>LaslesVPN</strong> is a private virtual network that has unique features and has high security.</p>
      <div className="footerIcon">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-square-instagram"></i>
      </div>
      <span>©2020LaslesVPN</span>
    </div>
  )
}

export default FooterInfo