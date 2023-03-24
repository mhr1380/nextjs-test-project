import AppSelect from "../Components/AppSelect";
import { useState, useEffect } from "react";

import SliderItem from "../Components/SliderItem";
import blue_plus from "../assets/icons/blue-plus.png";
import MenuLayout from "../Layout/MenuLayout";
import Router from "next/router";
import { getSliders } from "../Components/http-services/get-sliders";
import Pagination from "../Components/Pagination";

const perPagesOptions = [7, 10, 15, 20];
const SlidersList = () => {
  const [perPages, setPerPages] = useState(perPagesOptions[0]);
  const [sliders, setSliders] = useState([]);
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [slidersCount, setSlidersCount] = useState(0);

  const [refresher, setRefresher] = useState(0);

  const getSlidersList = async () => {
    const { data } = await getSliders(currentPage, perPages);
    setSlidersCount(data.count);
    setSliders(data.results);
  };
  useEffect(() => {
    getSlidersList();
  }, [refresher, currentPage, perPages]);

  return (
    <MenuLayout>
      <div className="sliderlist-container">
        <div className="sliderlist-header">
          <div className="sliderlist-header-right">
            <div className="flex align-center col-gap-9">
              {" "}
              <p className="font-size-16">تعداد نمایش در صفحه : </p>
              <AppSelect
                opts={perPagesOptions}
                value={perPages}
                setValue={setPerPages}
                zIndex={100}
              />
            </div>
            <div className="flex align-center col-gap-9"></div>
          </div>
          <div className="sliderlist-header-left"></div>
        </div>
        <div className="sliderlist-body">
          <div className="sliderlist-body-add">
            <button
              onClick={() => {
                Router.push("/add-slider");
              }}
            >
              افزودن اسلایدر جدید
              <img src={blue_plus.src} alt="plus" />
            </button>
          </div>
          {sliders.map((slider) => (
            <SliderItem
              key={slider.id}
              slider={slider}
              setRefresher={setRefresher}
            />
          ))}
        </div>
        <div className="sliderlist-footer">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            perPage={perPages}
            itemsCount={slidersCount}
          />
        </div>
      </div>
    </MenuLayout>
  );
};

export default SlidersList;
