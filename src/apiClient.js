import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {
  constructor(tokenProvider, newUserType, logoutHandler){
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
    this.userType = newUserType;
  }


  authenticatedCall(method,url,data){
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider
      },
      data,
    }).catch((error) => {
      if(error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject()
      } else {
      throw error;
    }
    });
  }

  apiCall(method, url, data) {
    return axios({
      method,
      url,
      data,
    }).catch((error) => {
      throw error;
    });
  }

  login(username,password) {
    return this.apiCall("post",url + "auth/",{username: username, password:password});
  }

  // getEvents() {
  //   return this.authenticatedCall("get", url);
  // }

  // addEvent(name, location, info, eventDate) {
  //   console.log("Posting", name)
  //   return this.authenticatedCall("post", url, { name, location, info, eventDate });
  // }

  // removeEvent(id) {
  //   return this.authenticatedCall("delete", `${url}${id}`);
  // }

  // updateEvent(id, name, location, info, eventDate) {
  //   return this.authenticatedCall("put", `${url}${id}`, { name, location, info, eventDate });
  // }
  getProfiles() {
    return this.authenticatedCall("get", url);
  }

  addProfile(firstName, lastName, bio) {
    console.log("Posting", firstName)
    return this.authenticatedCall("post", url, { firstName, lastName, bio });
  }

  removeProfile(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }

  updateProfile(id, firstName, lastName, bio) {
    return this.authenticatedCall("put", `${url}${id}`, { firstName, lastName, bio });
  }
}
