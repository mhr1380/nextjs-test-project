import blue_edit from "../assets/icons/edit-blue.png";
import sliderthumb from "../assets/images/sliderthumb.png";
import red_trash from "../assets/icons/red-trash.png";
import { toast } from "react-toastify";
import { useState } from "react";
import pencil from "../assets/icons/pencil.png";
import check from "../assets/icons/check.png";
import WarningPopup from "./popups/warningPopup";
import { editSlider } from "./http-services/edit-slider";
import { deleteSlider } from "./http-services/delete-slider";
import Router from "next/router";
import { setSliderMain } from "./http-services/set-slider-main";
const SliderItem = ({ slider, setRefresher }) => {
  const [editMode, setEditMode] = useState(slider.name);
  const [editable, setEditable] = useState(false);
  const [show, setShow] = useState(false);
  const [showMain, setShowMain] = useState(false);
  return (
    <div className="sliderlist-slider">
      <WarningPopup
        key={2}
        title={"آیا از تنظیم این اسلایدر به عنوان اسلایدر اصلی اطمینان دارید؟"}
        subtitle={""}
        show={showMain}
        setShow={setShowMain}
        acceptClick={async () => {
          try {
            await setSliderMain(slider.id);
            toast.success("اسلایدر با موفقیت تنظیم شد");
            setRefresher((prev) => prev + 1);
            setShowMain(false);
          } catch (error) {
            toast.error("خطایی رخ داده است");
            console.log(error);
          }
        }}
      />
      <WarningPopup
        key={1}
        title="آیا از حذف این اسلایدر اطمینان دارید؟"
        subtitle={""}
        show={show}
        setShow={setShow}
        acceptClick={async () => {
          try {
            const data = await deleteSlider(slider.id);
            toast.success("اسلایدر با موفقیت حذف شد");
            setRefresher((prev) => prev + 1);
            setShow(false);
            console.log(data);
          } catch (error) {
            toast.error("خطایی رخ داده است");
            console.log(error);
          }
        }}
      />
      <div className="sliderlist-slider-header">
        <div className="sliderlist-slider-input-container">
          <input
            value={editMode}
            onChange={(e) => {
              setEditMode(e.target.value);
            }}
            disabled={!editable}
          />
          <img
            onClick={async () => {
              if (editable) {
                try {
                  const data = await editSlider(
                    {
                      ...slider,
                      name: editMode,
                    },
                    slider.id
                  );
                  console.log(data);
                  toast.success("نام اسلایدر با موفقیت ویرایش شد");
                } catch (error) {
                  toast.error("خطایی رخ داده است");
                  console.log(error);
                }
              } else {
              }
              setEditable(!editable);
            }}
            src={editable ? check.src : pencil.src}
          />
        </div>

        <button
          className="silderlist-slider-header-button"
          onClick={() => {
            Router.push(`./edit-slider/${slider.id}`);
          }}
        >
          <h3>ویرایش</h3>
          <img src={blue_edit.src} alt="edit" />
        </button>
      </div>
      <div className="sliderlist-slider-body">
        {slider.slides.map((slide) => (
          <img src={slide.image} />
        ))}
      </div>
      <div className="sliderlist-slider-footer">
        {slider.is_main_slider ? (
          <div>اسلایدر صفحه اصلی</div>
        ) : (
          <button
            className="sliderlist-slider-btn btn_backtologin"
            onClick={() => {
              setShowMain(true);
            }}
          >
            تنظیم به عنوان اسلایدر صفحه اصلی
          </button>
        )}
        <button
          className="sliderlist-slider-footer-button btn_backtologin_red"
          onClick={() => {
            setShow(true);
          }}
        >
          <h3>حذف اسلایدر</h3>
          <img
            src={red_trash.src}
            alt="red-trash"
            onClick={() => {
              toast.success("اسلایدر حذف شد", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default SliderItem;
