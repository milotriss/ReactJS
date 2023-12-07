
import FooterInfo from "../footerInformation/footerIfomation"
import Subscribe from "../subscribeFooter/subscribe"
import "./footer.css"

const Footer = ():JSX.Element => {
    return (
        <footer>
            <Subscribe/>
            <section className="footer">
                <FooterInfo/>
                <div className="footerNav">
                    <ul>
                        <li><strong>Product</strong></li>
                        <li>Download</li>
                        <li>Pricing</li>
                        <li>Locations</li>
                        <li>Server</li>
                        <li>Countries</li>
                        <li>Blog</li>
                    </ul>
                    <ul>
                        <li><strong>Engage</strong></li>
                        <li>LaslesVPN ?</li>
                        <li>FAQ</li>
                        <li>Tutorials</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                    <ul>
                        <li><strong>Earn Money</strong></li>
                        <li>Affiliate</li>
                        <li>Become Partner</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer