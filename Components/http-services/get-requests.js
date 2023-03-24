import { http } from "./http";
export const getRequests = (currentPage = 1, perPages = 7) => {
  return http.get(
    `core_api/user/user_requests/?page=${currentPage}&page_size=${perPages}`
  );
};
