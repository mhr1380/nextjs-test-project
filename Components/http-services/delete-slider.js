import { http } from "./http";
export const deleteSlider = (id) => {
  return http.delete(`content_manager_api/sliders/${id}/`);
};
