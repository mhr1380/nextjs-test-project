import { http } from "./http";
export const login = (username, password) => {
  return http.post(`core_api/auth/login/`, {
    username,
    password,
  });
};
