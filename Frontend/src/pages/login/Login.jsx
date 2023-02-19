import "./login.css"

export default function Login() {
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
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForget">Forget Password?</span>
                    <buttton className="loginRegisterButton">Create a New Account</buttton>
                </div>
            </div>
        </div>
    </div>
  )
}
