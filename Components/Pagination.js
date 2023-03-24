import chevron_left from "../assets/icons/chevron-left.png";
import chevron_right from "../assets/icons/chevron-right.png";
const Pagination = ({ perPage, itemsCount, currentPage, setCurrentPage }) => {
  const allPageTemp = Math.ceil(itemsCount / perPage);
  const calculateAllPage = (allPageTemp) => {
    const pages = [];
    for (let i = 1; i <= allPageTemp; i++) {
      pages.push(i);
    }
    return pages;
  };
  const oneToThree = () => {
    if(allPage.length===0)return
    if(allPage.length===1){
      return  <>
      <div
        className={`page-number font-iran cursor-pointer ${
          currentPage === 1 ? "active" : ""
        }`}
        onClick={() => {
          setCurrentPage(1);
        }}
      >
        1
      </div>
     
    
    </>
    }
    if(allPage.length===2){
      return  <>
      <div
        className={`page-number font-iran cursor-pointer ${
          currentPage === 1 ? "active" : ""
        }`}
        onClick={() => {
          setCurrentPage(1);
        }}
      >
        1
      </div>
      <div
        className={`page-number font-iran cursor-pointer ${
          currentPage === 2 ? "active" : ""
        }`}
        onClick={() => {
          setCurrentPage(2);
        }}
      >
        2
      </div>
    
    </>
    }
    if(allPage.length===3){
      return  <>
      <div
        className={`page-number font-iran cursor-pointer ${
          currentPage === 1 ? "active" : ""
        }`}
        onClick={() => {
          setCurrentPage(1);
        }}
      >
        1
      </div>
      <div
        className={`page-number font-iran cursor-pointer ${
          currentPage === 2 ? "active" : ""
        }`}
        onClick={() => {
          setCurrentPage(2);
        }}
      >
        2
      </div>
      <div
        className={`page-number font-iran cursor-pointer ${
          currentPage === 3 ? "active" : ""
        }`}
        onClick={() => {
          setCurrentPage(3);
        }}
      >
       3
      </div>
    </>
    }
    return (
      <>
        <div
          className={`page-number font-iran cursor-pointer ${
            currentPage === 1 ? "active" : ""
          }`}
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          1
        </div>
        <div
          className={`page-number font-iran cursor-pointer ${
            currentPage === 2 ? "active" : ""
          }`}
          onClick={() => {
            setCurrentPage(2);
          }}
        >
          2
        </div>
        <div
          className={`page-number font-iran cursor-pointer ${
            currentPage === 3 ? "active" : ""
          }`}
          onClick={() => {
            setCurrentPage(3);
          }}
        >
          3
        </div>
        {currentPage === 3 && (
          <div
            className={`page-number font-iran cursor-pointer ${
              currentPage === 4 ? "active" : ""
            }`}
            onClick={() => {
              setCurrentPage(4);
            }}
          >
            {4}
          </div>
        )}
        <div>...</div>
        <div
          className={`page-number font-iran cursor-pointer ${
            currentPage === allPage.length ? "active" : ""
          }`}
          onClick={() => {
            setCurrentPage(allPage.length);
          }}
        >
          {allPage.length}
        </div>
      </>
    );
  };
  const fourToThreeBeforEnd = () => {
    if(allPage.length<=3)return;
    return (
      <>
        <div
          className={`page-number font-iran cursor-pointer ${
            currentPage === 1 ? "active" : ""
          }`}
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          {1}
        </div>
        <div>...</div>
        <div
          className={`page-number font-iran cursor-pointer ${
            currentPage === currentPage - 1 ? "active" : ""
          }`}
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          {currentPage - 1}
        </div>

        <div
          className={`page-number font-iran cursor-pointer ${
            currentPage === currentPage ? "active" : ""
          }`}
          onClick={() => {
            setCurrentPage(currentPage);
          }}
        >
          {currentPage}
        </div>
        <div
          className={`page-number font-iran cursor-pointer ${
            currentPage === currentPage + 1 ? "active" : ""
          }`}
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          {currentPage + 1}
        </div>
        <div>...</div>
        <div
          className={`page-number font-iran cursor-pointer ${
            currentPage === allPage.length ? "active" : ""
          }`}
          onClick={() => {
            setCurrentPage(allPage.length);
          }}
        >
          {allPage.length}
        </div>
      </>
    );
  };
  const threeToEndToEnd = () => {
    if(allPage.length<=3)return;
    return (
      <>
        <div
          className={`page-number font-iran cursor-pointer ${
            currentPage === 1 ? "active" : ""
          }`}
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          {1}
        </div>
        <div>...</div>
        {currentPage === allPage.length - 2 && (
          <div
            className={`page-number font-iran cursor-pointer ${
              currentPage === allPage.length - 3 ? "active" : ""
            }`}
            onClick={() => {
              setCurrentPage(allPage.length - 3);
            }}
          >
            {allPage.length - 3}
          </div>
        )}

        <div
          className={`page-number font-iran cursor-pointer ${
            currentPage === allPage.length - 2 ? "active" : ""
          }`}
          onClick={() => {
            setCurrentPage(allPage.length - 2);
          }}
        >
          {allPage.length - 2}
        </div>
        <div
          className={`page-number font-iran cursor-pointer ${
            currentPage === allPage.length - 1 ? "active" : ""
          }`}
          onClick={() => {
            setCurrentPage(allPage.length - 1);
          }}
        >
          {allPage.length - 1}
        </div>
        <div
          className={`page-number font-iran cursor-pointer ${
            currentPage === allPage.length ? "active" : ""
          }`}
          onClick={() => {
            setCurrentPage(allPage.length);
          }}
        >
          {allPage.length}
        </div>
      </>
    );
  };

  const allPage = calculateAllPage(allPageTemp);
  return (
    <div className="sliderlist-footer">
      {allPage.length > 1 && (
        <div
          className="flex align-center cursor-pointer"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          {currentPage > 1 && (
            <>
              <img className="icon-24" src={chevron_right.src} />
              صفحه قبلی
            </>
          )}
        </div>
      )}

      <div className="flex col-gap-4 flex-wrap max-width-160">
        
        {currentPage < 4 && oneToThree()}
        {currentPage >= 4 &&
          currentPage < allPage.length - 2 &&
          fourToThreeBeforEnd()}
        {currentPage >= allPage.length - 2 && threeToEndToEnd()}
      </div>
      {allPage.length > 1 && (
        <div
          className="flex align-center cursor-pointer"
          onClick={() => {
            if (currentPage < allPageTemp) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          {currentPage < allPageTemp && (
            <>
              صفحه بعدی
              <img
                className="icon-24"
                src={chevron_left.src}
                alt="chevron-right"
              />{" "}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;
