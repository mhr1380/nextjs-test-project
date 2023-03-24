import slider_horizontal from "../assets/icons/slider-horizontal.svg";
import slider_select from "../assets/icons/slider-select.svg";

const MenuItems = [
  {
    id: 3,
    title: "اسلایدر",
    link: "/slider",
    open: false,
    icon: slider_horizontal,
    select_icon: slider_select,
    children: [
      {
        title: "مشاهده اسلایدر ها",
        link: "/sliders-list",
      },
      {
        title: "افزودن اسلایدر جدید",
        link: "/add-slider",
      },
    ],
  },
];

export default MenuItems;
