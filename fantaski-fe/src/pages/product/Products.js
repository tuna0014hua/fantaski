import { useState, useEffect, useRef } from "react";
import "animate.css";
import Navbar from "../../components/share/Navbar";
import Footer from "../../components/share/Footer";
import Gotop from "../../components/share/Gotop";

import CarouselP from "../../components/products/CarouselP";
import ScrolldownIcon from "../../components/products/ScrolldownIcon";
import SwitchIcon from "../../components/products/SwitchIcon";
import NavSide from "../../components/products/NavSide";
import ProductSquare from "../../components/products/ProductSquare";
import ProductList from "../../components/products/ProductList";
import PageButton from "../../components/products/PageButton";

function Products() {
  const [square, setSquare] = useState(true);

  // 用一個ref抓到要跳轉到的位置區塊，再寫一個function scrollTo
  const productSection = useRef(null);
  console.log(productSection);
  const scrollToProduct = () =>
    window.scrollTo({
      top: Number(`${productSection.current.offsetTop}`) - 150,
      behavior: "smooth",
    });
  // console.log(productSection.current.offsetTop);

  return (
    <>
      {/* <Navbar /> */}
      <CarouselP />
      <ScrolldownIcon
        onClick={() => {
          scrollToProduct();
        }}
      />
      <SwitchIcon setSquare={setSquare} square={square} />

      <div className="d-flex main_area" ref={productSection}>
        <NavSide />
        {square ? <ProductSquare /> : <ProductList />}
        <PageButton />
      </div>

      {/* <Footer /> */}
    </>
  );
}
export default Products;
