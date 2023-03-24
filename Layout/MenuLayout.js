import bottom_arrow from "../assets/icons/bottom-arrow.png";
import triangle from "../assets/icons/triangle.png";
import { useEffect, useState } from "react";
import MenuItems from "../Utils/menuItems";
import ecommerceLogo from "../assets/images/ecommerce-logo.png";
import menu from "../assets/icons/menu.png";
import bottom_arrow_white from "../assets/icons/bottom-arrow-white.png";
import key from "../assets/icons/key.png";
import user from "../assets/icons/user.png";
import power from "../assets/icons/power.png";
import arrow_left from "../assets/icons/arrow-left.png";
import arrow_right from "../assets/icons/arrow-right.png";
import Link from "next/link";
import { useRouter } from "next/router";
import arrow_left_menu from "../assets/icons/arrow-left-menu.png";
import { getProfile } from "../Components/http-services/get-profile";
import Router from "next/router";

const MenuLayout = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [menuItems, setMenuItems] = useState(MenuItems);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [sidebarClose, setSidebarClose] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [lastMenuItemHolder, setLastMenuItemHolder] = useState(null);

  const router = useRouter();

  const onMenuItemClick = (item) => {
    if (sidebarClose) {
      setSidebarClose(false);
    }
    const newMenuItems = menuItems.map((menuItem) => {
      if (menuItem.id === item.id) {
        menuItem.open = !menuItem.open;
        menuItem.active = false;
      }
      return menuItem;
    });
    setMenuItems(newMenuItems);
  };

  const handleMenuItemColor = (link) => {
    if (link === router.pathname) {
      return true;
    } else {
      return false;
    }
  };
  const checkToken = async () => {
    try {
      await getProfile();
    } catch (error) {
      toast.success("لطفا توکن معتبری دریافت کنید");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (sidebarClose) {
      const lastMenuItem = menuItems.find((item) => item.open === true);
      setLastMenuItemHolder(lastMenuItem);
      const newMenuItems = menuItems.map((menu_item) => {
        if (menu_item.id === lastMenuItem?.id) {
          return { ...menu_item, open: false, active: true };
        }
        return { ...menu_item, open: false };
      });
      setMenuItems(newMenuItems);
    } else {
      const newMenuItems = menuItems.map((menu_item) => {
        if (menu_item.id === lastMenuItemHolder?.id) {
          menu_item.open = true;
        }
        return menu_item;
      });
      setMenuItems(newMenuItems);
    }
  }, [sidebarClose]);
  return (
    <>
      <div
        className={`sidebar-container ${sidebarClose ? "close" : ""} ${
          mobileSidebarOpen ? "show-mobile-sidebar" : ""
        }`}
      >
        <div className={`sidebar-header ${sidebarClose ? "mini" : ""}`}>
          <img
            src={arrow_right.src}
            alt="menu"
            className={`right-arrow`}
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
          <img
            className="ecommerce-logo"
            src={ecommerceLogo.src}
            alt="ecommerce-logo"
          />
        </div>
        <div className="sidebar-body">
          <div className="sidebar-menu">
            {menuItems.map((item) => {
              if (profile?.is_staff && !profile?.is_superuser) {
                if (item.is_superuser) {
                  return;
                }
              }
              if (item.children.length > 0) {
                return (
                  <div className="sidebar-menu-item-container" key={item.id}>
                    <div
                      className={`sidebar-menu-item ${item.open ? "open" : ""}`}
                      onClick={() => {
                        onMenuItemClick(item);
                      }}
                    >
                      <div className="flex col-gap-16">
                        <img
                          className="sidebar-icon"
                          src={
                            item.open || item.active
                              ? item.select_icon.src
                              : item.icon.src
                          }
                          alt="music-library"
                        />
                        <span>{item.title}</span>
                      </div>
                      {item.children.length > 0 && (
                        <img
                          src={bottom_arrow.src}
                          alt="bottom-arrow"
                          className="arrow"
                        />
                      )}
                    </div>
                    {item.open &&
                      item.children &&
                      item.children.map((child, index) => (
                        <Link href={child.link}>
                          <div className="sidebar-menu-subitems" key={index}>
                            <div
                              className={`sidebar-menu-subitem ${
                                handleMenuItemColor(child.link)
                                  ? "menu-active"
                                  : ""
                              }`}
                            >
                              <div className="flex col-gap-16 align-center">
                                <img
                                  className={`sidebar-sub-icon ${
                                    handleMenuItemColor(child.link)
                                      ? "active-icon"
                                      : ""
                                  }`}
                                  src={
                                    handleMenuItemColor(child.link)
                                      ? arrow_left_menu.src
                                      : triangle.src
                                  }
                                  alt="triangle"
                                />
                                <span>{child.title}</span>
                              </div>
                            </div>{" "}
                          </div>
                        </Link>
                      ))}
                  </div>
                );
              } else {
                return (
                  <div className="sidebar-menu-item-container" key={item.id}>
                    <Link href={item.link}>
                      <div
                        className={`sidebar-menu-item ${
                          item.open ? "open" : ""
                        }`}
                        onClick={() => {
                          onMenuItemClick(item);
                        }}
                      >
                        <div className="flex col-gap-16">
                          <img
                            className="sidebar-icon"
                            src={
                              item.open || item.active
                                ? item.select_icon.src
                                : item.icon.src
                            }
                            alt="music-library"
                          />
                          <span>{item.title}</span>
                        </div>
                        {item.children.length > 0 && (
                          <img
                            src={bottom_arrow.src}
                            alt="bottom-arrow"
                            className="arrow"
                          />
                        )}
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div
        className={`topmenu-container ${sidebarClose ? "open" : ""} ${
          mobileSidebarOpen ? "overlay" : ""
        }`}
      >
        <div className="topmenu-right">
          <img
            onClick={() => {
              setSidebarClose(!sidebarClose);
            }}
            className="sidebar-icon"
            src={sidebarClose ? arrow_left.src : menu.src}
            alt="hamburger-menu"
          />
          <a href="http://ecommerce.gov.ir/" target="_blank">
            <div className="topmenu-site-link">
              ورود به سایت مرکز توسعه تجارت الکترونیکی
            </div>
          </a>
        </div>
        <div
          className={`topmenu-handle-height ${profileMenuOpen ? "open" : ""}`}
          onClick={() => {
            setProfileMenuOpen(!profileMenuOpen);
          }}
        >
          {" "}
          <div className="topmenu-left-container">
            <div className="topmenu-left">
              <span>خوش آمدید!</span>
              <img src={bottom_arrow_white.src} alt="مصطفی" />
            </div>
            <div className="topmenu-left">
              <Link href="/">
                {" "}
                <span>پروفایل</span>
              </Link>
              <img
                className="topmenu-left-inner-icon"
                src={user.src}
                alt="پروفایل"
              />
            </div>
            <div className="topmenu-left">
              <Link href={"/"}>
                {" "}
                <span>تغییر رمز عبور</span>
              </Link>
              <img
                className="topmenu-left-inner-icon"
                src={key.src}
                alt="کلید"
              />
            </div>
            <div
              className="topmenu-left"
              onClick={() => {
                Router.push("/");
              }}
            >
              <span>خروج</span>
              <img
                className="topmenu-left-inner-icon"
                src={power.src}
                alt="خروج"
              />
            </div>
          </div>
        </div>
        <img
          src={menu.src}
          alt="menu"
          className="mobile-hamburger"
          onClick={() => {
            setMobileSidebarOpen(!mobileSidebarOpen);
          }}
        />
        <img
          src={ecommerceLogo.src}
          alt="ecommerce-logo"
          className="ecommerce-logo mobile"
        />
      </div>
      <div className={`content-container`}>{children}</div>
      <div
        className={`layout-overlay ${mobileSidebarOpen ? "open" : ""}`}
      ></div>
    </>
  );
};

export default MenuLayout;
