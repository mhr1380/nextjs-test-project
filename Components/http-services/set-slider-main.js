import { http } from "./http";
export const setSliderMain = (id) => {
  return http.post(`content_manager_api/sliders/${id}/make_slider_main/`);
};
