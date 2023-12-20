import React from 'react'
import './login.css'


interface Props {
    openRegister:Function
}
const Login = (props:Props):JSX.Element => {
  return (
    <div>
         <form className="login">
      <h1>Login</h1>
      
      <div className="login_item">
        <input placeholder="Email *" type="email" className="login_input" />
      </div>
     
      <div className="login_item">
        <input
          placeholder="Password *"
          type="password"
          className="login_input"
        />
      </div>
      
      
      <button type="submit" className="btn">
        Login
      </button>
      <div className="separate">
        <div className="separate_item" />
        <span className="separate_item-text">or</span>
        <div className="separate_item" />
      </div>
      <div className="btn_login">
        <button className="btn_gg btn" type="submit">
          <i className="fa-brands fa-google" />
          <span>Login with Google</span>
        </button>
      </div>
      <div className="btn_login">
        <button className="btn_face" type="submit">
          <i className="fa-brands fa-facebook" />
          <span>Login with Facebook</span>
        </button>
      </div>
      <div className="btn_login">
        <button className="btn_apple" type="submit">
          <i className="fa-brands fa-apple" />
          <span>Login with Apple</span>
        </button>
      </div>
      <div className="btn_login">
        <button className="btn_insta" type="submit">
          <i className="fa-brands fa-instagram" />
          <span>Login with Instagram</span>
        </button>
      </div>
      <p className="footer">
        Already a member? <a onClick={() => props.openRegister()}>Register</a>
      </p>
    </form>
    </div>
  )
}

export default Login