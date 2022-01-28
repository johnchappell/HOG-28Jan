import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import { ApiClient } from "./apiClient";
import Login from "./Login";
import EmployerDashboard from "./EmployerDashboard";
import ParticipantDashboard from "./ParticipantDashboard";

function App() {
  const [token,changeToken] = useState(window.localStorage.getItem("token"));
  const [userType,changeUserType] = useState(window.localStorage.getItem("userType"));

  const client = new ApiClient(
    token, userType,
    () => logout()
  );

  const login = (newToken, newUserType) => {
    window.localStorage.setItem("token",newToken);
    window.localStorage.setItem("userType",newUserType);
    changeToken(newToken);
    changeUserType(newUserType);
  }
  
  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userType");
    changeToken(undefined);
    changeUserType("");
  }

  return (
    <>
      {/* {token ? (
        userType=="admin" ?
        <Dashboard client={client} />
      ) : (
        <Login loggedIn={(token, userType) => login(token, userType)} client={client} />
      )

      } */}
      {token ? (
        userType=="admin"
        ? <AdminDashboard client={client} logout={logout} userType={userType} />
        : userType=="employer"
        ? <EmployerDashboard client={client}  logout={logout}/>
        : userType=="participant"
        ? <ParticipantDashboard client={client}   logout={logout}  userType={userType} />
        : <></>
      ) : (
        <Login loggedIn={(token,userType)  => login(token,userType)} client={client} logout={logout}/>
      )
      }
      
    </>
  );
}

export default App;
