
import React, { useState } from "react";


export default function(props) {

  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const [input, setInput] = useState({
    FirstName: '',
    LastName:'',
    EmailAddress:'',
    password: '',
    ConfirmPassword: '',
    PhoneNumber:''
  });
 
  const [error, setError] = useState({
    FirstName: '',
    LastName:'',
    EmailAddress:'',
    password: '',
    ConfirmPassword: '',
    PhoneNumber:''
  });
 
  const onInputChange = e => {
    const { name, value ,isValid} = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value,
      [isValid]:true
    }));
    validateInput(e);
  }
 
  const validateInput = e => {
    let { name, value ,isValid} = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {

        case "FirstName":
          if (!value) {
            stateObj[name] = "Please enter First Name";
          }
          break;
  
        case "LastName":
          if (!value) {
            stateObj[name] = "Please enter Last Name";
          }
          break;
  
        case "EmailAddress":
          let pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
          if (!value) {
            stateObj[name] = "Please enter Email Address";
            } else if (input.EmailAddress && value !== input.EmailAddress.match(pattern)) {
              stateObj[name] = "Please enter valid E-mail Address";
            } else {
              stateObj[name] = input.EmailAddress.match(pattern) ? "" : error.EmailAddress;
            }
            break;
  
          case "password":
            if (!value) {
              stateObj[name] = "Please enter Password.";
            } else if (input.ConfirmPassword && value !== input.ConfirmPassword) {
              stateObj["ConfirmPassword"] = "Password and Confirm Password does not match.";
            } else {
              stateObj["ConfirmPassword"] = input.ConfirmPassword ? "" : error.ConfirmPassword;
            }
            break;
   
          case "confirmPassword":
            if (!value) {
              stateObj[name] = "Please enter Confirm Password.";
            } else if (input.password && value !== input.password) {
              stateObj[name] = "Password and Confirm Password does not match";
            }
            break;
  
            case "PhoneNumber":
              if (!value) {
                stateObj[name] = "Please enter Phone Number";
              } else if (input.PhoneNumber.length < 10){
                stateObj[name] = "Please enter valid Phone Number";
              } else if (input.PhoneNumber.length > 10){
                stateObj[name] = "Please enter valid Phone Number";
              } else {
                stateObj[name] = input.PhoneNumber ? "" : error.PhoneNumber;
              }
              break;
  
   
          default:
            break;
        }
   
        return stateObj;
      });
    }


  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" method="posts">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
              <a href="#">Sign Up</a>
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="EmailAddress"
                className="form-control mt-1"
                placeholder="Enter email"
                value={input.EmailAddress}
                onChange={onInputChange}
              />
              {error.EmailAddress && <span className='err'>{error.EmailAddress}</span>}
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={input.password}
                onChange={onInputChange}
                onBlur={validateInput}>
                </input>
              {error.password && <span className='err'>{error.password}</span>}
              
            </div>     
            <div className="form-group mt-3">
              
              <input
                type="checkbox"
                className="checbox-form"
                value = "Remember E-mail & Password"
                
              />
              <label>Remember Me</label>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              <a href="#">Forgot password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }
  
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
            <a href="#">Sign In</a>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              name="FirstName"
              className="form-control mt-1"
              placeholder="e.g Jane"
              value={input.FirstName}
              onChange={onInputChange}
              onBlur={validateInput} 
              required>
            </input>
            {error.FirstName && <span className='err'>{error.FirstName}</span>}
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              name="LastName"
              className="form-control mt-1"
              placeholder="e.g Doe"
              value={input.LastName}
              onChange={onInputChange}
              onBlur={validateInput}
              required>
            </input>
            {error.LastName && <span className='err'>{error.LastName}</span>}
            
          </div>
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input
              type="email"
              name="EmailAddress"
              className="form-control mt-1"
              placeholder="Email Address"
              value={input.EmailAddress}
              onChange={onInputChange}
              required>
              </input>
              {error.EmailAddress && <span className='err'>{error.EmailAddress}</span>}
            
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Password"
              value={input.password}
              onChange={onInputChange}
              onBlur={validateInput}
              required>
              </input>
            {error.password && <span className='err'>{error.password}</span>}
            
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="ConfirmPassword"
              className="form-control mt-1"
              placeholder="Confirm Password"
              value={input.ConfirmPassword}
              onChange={onInputChange}
              onBlur={validateInput} 
              required>
              </input>
            {error.ConfirmPassword && <span className='err'>{error.ConfirmPassword}</span>}
            
          </div>   <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="tel"
              name="PhoneNumber"
              className="form-control mt-1"
              placeholder="Phone Number"
              value={input.PhoneNumber}
              onChange={onInputChange}
              onBlur={validateInput}
              required>
              </input>
              {error.PhoneNumber && <span className='err'>{error.PhoneNumber}</span>}

          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            <a href="#">Forgot password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}



