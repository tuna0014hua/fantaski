import { useState, useEffect, useRef } from "react";
import { PRODUCTIMAGE_URL } from "../../config/url";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTagsFill } from "react-icons/bs";
import PageButton from "../products/PageButton";
// import Navbar from "../share/Navbar";

const productFromServer = [
  {
    id: 1,
    name: "暗黑滿點單板",
    category: "雪板類",
    image: `${PRODUCTIMAGE_URL}/allblack.jfif`,
    price: 1200,
  },
  {
    id: 2,
    name: "可愛滿點單板",
    category: "雪板類",
    image: `${PRODUCTIMAGE_URL}/Elmo.jfif`,
    price: 1000,
  },
  {
    id: 3,
    name: "力量滿點單板",
    category: "雪板類",
    image: `${PRODUCTIMAGE_URL}/hulk.jfif`,
    price: 1600,
  },
];

function ProductSquare({
  clickToChangeToggle,
  setToggleState,
  toggleState,
  setItemNumber,
  itemNumber,
}) {
  let storage = localStorage;
  if (storage["addItemList"] == null) {
    storage["addItemList"] = "";
  }
  let itemString = storage["addItemList"];
  let items = itemString.substr(0, itemString.length - 2).split(", ");
  useEffect(() => {
    setItemNumber(items.length);
  }, [items.length]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productFromServer);
  }, []);

  const display = (
    <ul className="all_image_s ">
      {products.map((v, i) => {
        return (
          <li key={v.id} className="list-unstyled">
            <div className="product_image_s  ">
              <button
                id={i + 1}
                className={`${
                  toggleState[i + 1] === true && "collect_tagged"
                }  collect_tag`}
                onClick={clickToChangeToggle}
              >
                <BsTagsFill />
              </button>
              <img src={v.image} alt="" className="size" />
            </div>
            <p className="mt-3 h5">{v.name}</p>
            <p className="h5">NT$ {v.price}</p>
            {/* <Link to={"/orders?id=" + v.id}> */}
            <Button
              id={v.id}
              className="cart"
              onClick={(e) => {
                let itemId = v.id;
                let productInfo = e.currentTarget.children[0].value;
                console.log("value", productInfo); //http://localhost:3000/assets/images_product/allblack.jfif|雪板類|暗黑滿點單板|1200

                // 開始把點"加到購物車"的商品存入storage
                if (storage[itemId]) {
                  alert("您已將此物品加入購物車");
                } else {
                  storage.setItem(itemId, productInfo);
                  storage["addItemList"] += `${itemId}, `;
                }

                // 抓到storage裡面有幾樣商品的字串後，用split將字串轉成陣列就能顯示出有幾個了
                // setItemNumber(items.length);
              }}
            >
              加入購物車
              <input
                type="hidden"
                value={`${v.image}|${v.category}|${v.name}|${v.price}`}
              />
            </Button>
            {/* </Link> */}
          </li>
        );
      })}
    </ul>
  );

  // 下方頁面變換的功能
  const [pageButton, setPageButton] = useState(0);
  function handlePageButton(e) {
    let pageId = Number(e.target.id);
    setPageButton(pageId);
    // console.log("e.target", pageId);
  }

  return (
    <>
      {/* <Navbar /> */}
      <div>
        <h3 className="product_title pl-1">雪板類</h3>
        {display}
        <PageButton
          setPageButton={setPageButton}
          pageButton={pageButton}
          handlePageButton={handlePageButton}
        />
      </div>
    </>
  );
}

export default ProductSquare;
