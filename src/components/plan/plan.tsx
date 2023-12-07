import "./plan.css"

const Plan = () => {
  return (
    <section className="planGroup">
        <div className="planTitle">
            <h2>Choose Your Plan</h2>
            <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        </div>
        <div className="plans">
            <div className="plan">
                <img src="/asset/img/Standard.png" alt="" />
                <h4>Free Plan</h4>
                <ul>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Unlimited Bandwitch</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Encrypted Connection</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>No Traffic Logs</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Works on All Devices</span>
                    </li>
                </ul>
                <h3>Free</h3>
                <button>Select</button>
            </div>
            <div className="plan">
                <img src="/asset/img/Standard.png" alt="" />
                <h4>Standard Plan</h4>
                <ul>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Unlimited Bandwitch</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Encrypted Connection</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Yes Traffic Logs</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Works on All Devices</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Connect Anyware</span>
                    </li>
                </ul>
                <h3><strong>$9</strong> / mo</h3>
                <button>Select</button>
            </div>
            <div className="plan">
                <img src="/asset/img/Standard.png" alt="" />
                <h4>Premium Plan</h4>
                <ul>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Unlimited Bandwitch</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Encrypted Connection</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Yes Traffic Logs</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Works on All Devices</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Connect Anyware</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Get New Features</span>
                    </li>
                </ul>
                <h3><strong>$12</strong> / mo</h3>
                <button>Select</button>
            </div>
        </div>
    </section>
  )
}

export default Plan