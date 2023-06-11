import instance from ".";

const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/auth/login", userInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo) => {
  try {
    const { data } = await instance.post("/auth/register", userInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { login, register };
