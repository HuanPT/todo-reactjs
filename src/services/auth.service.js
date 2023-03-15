import axios from "axios";

export const login = (userCredential) => {
  return axios.post(
    "https://todoapi-fawn.vercel.app/api/auth/login",
    userCredential
  );
};

export const signUp = (userCredential) => {
  return axios.post(
    "https://todoapi-fawn.vercel.app/api/auth/signup",
    userCredential
  );
};
