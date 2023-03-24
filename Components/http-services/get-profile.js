import { http } from "./http";
export const getProfile = () => {
  return http.get("core_api/user/users/me/");
};
