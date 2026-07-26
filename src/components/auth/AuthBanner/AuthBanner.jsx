import "./AuthBanner.css";
import { FiCheckCircle } from "react-icons/fi";


function AuthBanner() {

    const FEATURES = [

        "Access verified job opportunities",

        "Explore verified job opportunities",

        "Build a professional career profile",

        "Connect with hiring companies"

    ];

    return (

        <div className="auth-banner">

            <div className="auth-banner-content">

                <div className="auth-logo">

                    

                    <div>

                        <h3>Infynex</h3>

                        <span>IT SOLUTIONS</span>

                    </div>

                </div>

                <div className="auth-banner-text">

                    <h1>

                        Your Next Great

                        <span> Opportunity Awaits</span>

                    </h1>

                    <p>

                        Join professionals who discover exciting career
                        opportunities through Infynex IT Solutions.

                    </p>

                </div>

                <ul className="auth-feature-list">

                    {FEATURES.map((item) => (

                        <li key={item}>

                            <FiCheckCircle aria-hidden="true"/>

                            {item}
 
                        </li>

                    ))}

                </ul>

            </div>

            <div className="auth-banner-footer">

                © {new Date().getFullYear()} Infynex IT Solutions. All Rights Reserved.

            </div>

        </div>

    );

}

export default AuthBanner;