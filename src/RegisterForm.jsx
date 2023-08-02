import React, { useState } from "react";
import "./Register.css";
const RegisterForm = () => {
  const [login, setlogin] = useState({
    name: " ",
    username: "",
    email: " ",
    phone: " ",
    password: " ",
    confirmpassword: " ",
  });
  const hendlchange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setlogin((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  return (
    <>
    <div className="body">

      <div className="container1">
        <div className="title1">Registration</div>
        <div className="content1">
          <form action="#" style={{marginLeft:"20px"}}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  required=""
                  value={login.name}
                  onChange={hendlchange}
                  />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  required=""
                  />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required=""
                  />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  required=""
                  />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  required=""
                  />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required=""
                />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span className="gender-title1">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one" />
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two" />
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three" />
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" defaultValue="Register" />
            </div>
          </form>
        </div>
      </div>
      </div>

     
    </>
  );
};

export default RegisterForm;
