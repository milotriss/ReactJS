import React, { useEffect, useState } from "react";
import "./register.css";

interface Props {
  offRegister: Function;
}
const Register = (props: Props): JSX.Element => {
  const [password,setPassword] = useState<string>('')
  const [checkPassword,setCheckPassword] = useState<string>('')
  const [name,setName] = useState<string>('')
  const [email,setEmail] = useState<string>('')

  const handleSubmitForm = ()=>{
    
  }
  useEffect(()=> {
    const regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$");
    const isValid = regex.test(email);
    const inputName:any = document.querySelector("input[placeholder='Name *']");
    const inputEmail:any = document.querySelector("input[placeholder='Email *']");
    const inputPassword:any = document.querySelector("input[placeholder='Password *']");
    const inputConfirm:any = document.querySelector("input[placeholder='Confirm password *']");
    const spanName:any = inputName.parentElement.querySelector('.error')
    const spanEmail:any = inputEmail.parentElement.querySelector('.error')
    const spanPassword:any = inputPassword.parentElement.querySelector('.error')
    const spanConfirm:any = inputConfirm.parentElement.querySelector('.error')
    if (password.length < 6 && password.length > 0) {
      spanPassword.innerHTML = "Too Short"
      inputPassword.style.border= '1px solid red'
      spanPassword.style.color= "red"
    }
    if (password.length > 16) {
      spanPassword.innerHTML = "Too Long"
      inputPassword.style.border= '1px solid red'
      spanPassword.style.color= "red"
    }
    if (password.trim() !== checkPassword.trim()) {
      spanEmail.innerHTML = "Wrong password"
      inputConfirm.style.border= '1px solid red'
      spanConfirm.style.color= "red"
    }
    if (!isValid && email.length > 0) {
      spanEmail.innerHTML = "Email is not valid"
      inputEmail.style.border= '1px solid red'
      spanEmail.style.color= "red"
    }

  },[password,checkPassword,name,email])

  const onchange = (e: any) => {
    let input:any = e.target
    let parentInput:any = e.target.parentElement
    let span:any = parentInput.querySelector('.error')
    if (input.value !== "" || input.value.trim() !== "") {
      span.innerHTML = ""
      input.style.border="none"
      span.style.color="none"
    }else{
      span.innerHTML = "Please enter"
      input.style.border="1px solid red"
      span.style.color="red"
    }
    if ((input.placeholder === "Password *")) {
      setPassword(input.value)
    }
    if ((input.placeholder === "Confirm password *")) {
      setCheckPassword(input.value)
    }
    if ((input.placeholder === "Email *")) {
      setEmail(input.value)
    }
    if ((input.placeholder === "Name *")) {
      setName(input.value)
    }
  }

  const onBlur = (e: any) => {
    let input:any = e.target
    let parentInput:any = e.target.parentElement
    let span:any = parentInput.querySelector('.error')
    if (input.value === "" || input.value.trim() === "") {
      span.innerHTML = "Please enter"
      input.style.border="1px solid red"
      span.style.color="red"
    }
  };
  return (
    <form className="register">
      <h1>Create Account</h1>
      <div className="register_item">
        <input
        onChange={onchange}
          onBlur={onBlur}
          placeholder="Name *"
          type="text"
          className="register_input"
        />
        <span className="error"></span>
      </div>

      <div className="register_item">
        <input
         onChange={onchange}
          onBlur={onBlur}
          placeholder="Email *"
          type="email"
          className="register_input"
        />
        <span className="error"></span>
      </div>

      <div className="register_item">
        <input
         onChange={onchange}
          onBlur={onBlur}
          placeholder="Password *"
          type="password"
          className="register_input"
        />
        <span className="error"></span>
      </div>

      <div className="register_item">
        <input
         onChange={onchange}
          onBlur={onBlur}
          placeholder="Confirm password *"
          type="password"
          className="register_input"
        />
        <span className="error"></span>
      </div>

      <div className="register_item">
        <input type="checkbox" className="register_check" />
        <label className="register_label">
          I agree the <a>Terms</a> of
          <a> Service and Privacy Policy </a>
        </label>
      </div>

      <button 
      onClick={handleSubmitForm}
      type="submit" className="btn">
        Create
      </button>

      <button
        onClick={() => props.offRegister()}
        style={{ marginTop: 20 }}
        type="submit"
        className="btn"
      >
        Back
      </button>
    </form>
  );
};

export default Register;
