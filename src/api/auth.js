import instance from ".";
import { saveToken } from "./storege";

const login = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  saveToken(data.token);
  return data;
};

const register = async (userInfo) => {
  const formdata = new FormData();
  for (let key in userInfo) {
    formdata.append(key, userInfo[key]);
  }
  const { data } = await instance.post("/auth/register", formdata);
  saveToken(data.token);
  return data;
};

const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};

export { login, register, me, getAllUsers };
