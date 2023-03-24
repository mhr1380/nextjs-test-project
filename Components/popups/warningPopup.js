import { useEffect } from "react";
const WarningPopup = ({ title, subtitle, acceptClick, show, setShow }) => {
  return (
    <div className={`newspage-delete-popup-container ${show ? "show" : ""}`}>
      <div className="newspage-delete-popup-body">
        <h3>{title}</h3>

        <p>{subtitle}</p>

        <div className="newspage-delete-popup-btns-container">
          <button
            className="btn-cancel"
            onClick={() => {
              setShow(false);
            }}
          >
            انصراف
          </button>
          <button className="btn-accept" onClick={acceptClick}>
            تایید
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningPopup;
