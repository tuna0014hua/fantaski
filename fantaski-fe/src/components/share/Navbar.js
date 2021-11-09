import React, { useEffect, useState } from "react";
import { IMAGE_SHARE_URL } from "../../config/url";
import { Link } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

// icon
import {
  BsFillCartFill,
  BsFillCloudSunFill,
  BsFillBrightnessHighFill,
  BsFillCloudRainHeavyFill,
  BsFillCloudyFill,
  BsSnow2,
  BsWind,
} from "react-icons/bs";
import { FaUserAlt, FaCloudSunRain } from "react-icons/fa";

import $ from "jquery";

function Navbar() {
  // 設定該項目被點選時的狀態
  let [colorButton, setColorButton] = useState("FANTASKI");
  const handleClick = (e) => {
    setColorButton(e.target.innerText);
  };
  // console.log(IMAGE_SHARE_URL.slice(0, -1));
  // navbar動態效果
  useEffect(() => {
    $(".change-logo").css("display", "none");
    $(".logo-img").css("display", "inline-block");
    $(window).scroll((evt) => {
      if ($(window).scrollTop() > 0) {
        $(".navbar").removeClass("navbar-top");
        $(".navbar").addClass("bg-white");
        $(".navbar").addClass("navbar-light");
        $(".left-line").addClass("left-line-blue");
        $(".change-logo").css("display", "inline-block");
        $(".logo-img").css("display", "none");
      } else {
        $(".navbar").addClass("navbar-top");
        $(".navbar").removeClass("bg-white");
        $(".navbar").removeClass("navbar-light");
        $(".left-line").removeClass("left-line-blue");
        $(".change-logo").css("display", "none");
        $(".logo-img").css("display", "inline-block");
      }
    });
  }, []);

  return (
    <>
      {/* scroll 初始化 */}
      <ParallaxProvider
        init={{
          smoothScrollingDuration: 1000,
          smoothScrolling: true,
          forceHeight: false,
        }}
        // getScrollTop={(scrollTop) => console.log("scrollTop", scrollTop)}
      >
        <nav className="navbar navbar-expand-lg fixed-top navbar-top">
          <div className="container">
            <div className="navbar-header">
              {/* logo */}
              <Link className="navbar-brand" to="/">
                <img
                  src={`${IMAGE_SHARE_URL}/fantaski_logo_white.svg`}
                  width="70"
                  height="70"
                  alt="FantaskiLogo"
                  className={`logo-img ${
                    colorButton === "FANTASKI" && "active"
                  }`}
                  onClick={handleClick}
                />
                <span
                  className={`change-logo ${
                    colorButton === "FANTASKI" && "active"
                  }`}
                  onClick={handleClick}
                >
                  FANTASKI
                </span>
              </Link>
            </div>
            {/* 主頁面 */}
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav-item mr-3">
                  <Link
                    className={`nav-link ${
                      colorButton === "多元課程" && "active"
                    }`}
                    to="/course"
                    onClick={handleClick}
                  >
                    多元課程
                  </Link>
                </li>
                <li className="nav-item  mr-3">
                  <Link
                    className={`nav-link ${
                      colorButton === "山的一切" && "active"
                    }`}
                    to="/mountainroute"
                    onClick={handleClick}
                  >
                    山的一切
                  </Link>
                </li>
                <li className="nav-item  mr-3">
                  <Link
                    className={`nav-link ${
                      colorButton === "租點裝備" && "active"
                    }`}
                    to="/products"
                    onClick={handleClick}
                  >
                    租點裝備
                  </Link>
                </li>
                <li className="nav-item  mr-3">
                  <Link
                    className={`nav-link ${
                      colorButton === "滑雪論壇" && "active"
                    }`}
                    to="/forum"
                    onClick={handleClick}
                  >
                    滑雪論壇
                  </Link>
                </li>
              </ul>
            </div>
            {/* 右側天氣、購物車&會員 */}
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-3 mr-auto d-flex justify-content-center align-items-center">
                <li className="left-line"></li>
                <li className="nav-item">
                  <Link className="nav-link" to="#/">
                    {/* 天氣小圖&溫度要抓天氣API */}
                    <BsFillCloudSunFill className="all-icon-nav" size={25} />
                    {/* <BsSnow2 />
                <FaCloudSunRain />
                <BsWind />
                <BsFillBrightnessHighFill />
                <BsFillCloudyFill />
                <BsFillCloudRainHeavyFill /> */}
                    <span className="warm-number">3°C</span>
                    <span className="area-time text-center">
                      JP Hokkaido 11:00
                    </span>
                  </Link>
                </li>
                <li className="left-line"></li>
                <li className="nav-item">
                  <Link className="nav-link position-relative" to="/order">
                    <BsFillCartFill className="all-icon-nav" size={25} />
                    <p className="shopping-cart-circle">10</p>
                  </Link>
                </li>
                <li className="left-line"></li>
                <li className="nav-item user-login">
                  <Link className="nav-link" to="/member">
                    <FaUserAlt className="all-icon-nav" size={25} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    {/* 會員登入後，要將(登入/註冊)改為會員的ID(帳號名稱) */}
                    <span className="login">登入/註冊</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </ParallaxProvider>
    </>
  );
}

export default Navbar;