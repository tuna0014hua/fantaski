import { useState, useEffect } from "react";
import "animate.css";

import CarouselP from "../components/products/CarouselP";
import ScrolldownIcon from "../components/products/ScrolldownIcon";
import SwitchIcon from "../components/products/SwitchIcon";
import NavSide from "../components/products/NavSide";
import ProductSquare from "../components/products/ProductSquare";
import ProductList from "../components/products/ProductList";
import PageButton from "../components/products/PageButton";

function Products() {
  const [square, setSquare] = useState(true);

  return (
    <>
      <div className="navbar"></div>
      <CarouselP />
      <ScrolldownIcon />
      <SwitchIcon setSquare={setSquare} square={square} />
      <div className="d-flex main_area">
        <NavSide />
        {square ? <ProductSquare /> : <ProductList />}
        <PageButton />
      </div>
    </>
  );
}
export default Products;