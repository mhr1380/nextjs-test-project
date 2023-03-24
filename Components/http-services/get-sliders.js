import { http } from "./http";
export const getSliders = (currentPage = 1, perPages = 7) => {
  return http.get(
    `content_manager_api/sliders/?page=${currentPage}&page_size=${perPages}`
  );
};
