import httpClient from "../http-common2";
let jwt = localStorage.getItem("jwt");

const auth = (data) => {
  const p = httpClient.post("security/authenticate", data);
  return p;
};
const getUser = (username) => {
  return httpClient.get(`security/user/getbyusername/${username}`,
   {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  }
  );
};
const logout = () => {
  localStorage.clear();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("username"));
};


export default { auth, getUser,logout ,getCurrentUser};

