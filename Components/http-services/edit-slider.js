import { http } from "./http";
export const editSlider = (payload, id, is_main_slider = false) => {
  return http.put(`content_manager_api/sliders/${id}/`, {
    ...payload,
    is_main_slider,
  });
};
