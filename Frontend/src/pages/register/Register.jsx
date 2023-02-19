import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SocialApp</h3>
                <span className="loginDesc">
                    Connect with friends and world around you!
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password Again" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <Link to="/login"className="loginRegisterButton" > <buttton >Log into Account</buttton></Link>
                   
                </div>
            </div>
        </div>
    </div>
  )
}
