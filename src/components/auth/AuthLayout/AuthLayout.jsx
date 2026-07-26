import "./AuthLayout.css";
import AuthBanner from "../AuthBanner/AuthBanner";

function AuthLayout({ children }) {

    return (

        <section className="auth-layout">

            <div className="auth-left">

                <AuthBanner />

            </div>

            <div className="auth-right">

                {children}

            </div>

        </section>

    );

}

export default AuthLayout;