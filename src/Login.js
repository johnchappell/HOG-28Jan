import React, { useState } from "react";
import login from "./login.css";
function Login(props) {
  
  const [disabled, cDisabled] = useState(false);

  const submitHandler = (e) => {
  console.log("submitted");
   e.preventDefault();
   cDisabled(true);

   props.client
    .login(e.target.username.value,e.target.password.value)
    .then( (response) => {
      cDisabled(false);
      console.log(response.data.token);
      props.loggedIn(response.data.token, response.data.userType);

    })
    .catch((error) => {
        alert("an error occurred, please try again")
        console.log(error);
        cDisabled(false);
    });
  };

  return (
    <div className="outer-container">
    <div className="login-container">
      <div className="login-div">
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="form-inner">
        <h2 >Login</h2>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input type="text" name="username" id="username" disabled={disabled}/>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" disabled={disabled}/>
        </div>
        <input className="login" type="submit" value="Login" disabled={disabled}/>
          
      </div>
      </form>
      </div>
      </div>
      </div>
      



    // <>
    //   Login
    //   <br />
    //   <form onSubmit={(e) => submitHandler(e)}>
    //      <div className="">
    //        username
    //     <br />
       
    //     <input type="text" name="username" disabled={disabled} />
    //     <br />
    //     </div>
    //     password
    //     <br />
    //     <input type="password" name="password" disabled={disabled} />
    //     <br />
    //     <br />
    //     <button type="submit" disabled={disabled}>
    //       {" "}
    //       Submit{" "}
    //     </button>
    //   </form>
    // </> 
  );
}

export default Login;
