import React from "react";
// import { IMAGE_ROUTER_URL } from "../../config/url";
import { PRODUCTIMAGE_URL } from "../../config/url";
function ProductRent() {
  return (
    <div>
      <div className="productSectionTitle">
        <p className="mt-3">裝備出租站</p>
      </div>
      <div className="productSection d-flex align-items-center pr-5">
        <div className="col-8">
          <div className="accordian">
            <ul>
              <li>
                <div className="image_title text-white">
                  <a>超流行滑雪外套</a>
                </div>
                <div>
                  <img src={`${PRODUCTIMAGE_URL}/skifamily.png`} alt="" />{" "}
                </div>
              </li>
              <li>
                <div className="image_title text-white">
                  <a>時尚酷雪板</a>
                </div>
                <div>
                  <img src={`${PRODUCTIMAGE_URL}/products.jpg`} alt="" />{" "}
                </div>
              </li>
              <li>
                <div className="image_title text-white">
                  <a>托米諾黃蜂極地摩托車</a>
                </div>
                <div>
                  <img src={`${PRODUCTIMAGE_URL}/snowmobile2.jpg`} alt="" />{" "}
                </div>
              </li>
              <li>
                <div className="image_title text-white">
                  <a>超防滑舒適雪鞋</a>
                </div>
                <a href="/#">
                  <img src={`${PRODUCTIMAGE_URL}/snowShoes1.jpg`} alt="" />{" "}
                </a>
              </li>
              <li>
                <div className="image_title text-white">
                  <a>炫彩護目鏡</a>
                </div>
                <a href="/#">
                  <img src={`${PRODUCTIMAGE_URL}/smooth.jpg`} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4 productLeft d-flex align-items-center flex-column mt-5 pt-1">
          <div className="productLeftTitle">
            歡迎各位來到FANTA SKI出租站 <br />
            我們擁有各式各樣的裝備
            <br />
            以及最完美的服務
            <br />
            我們所提供最好的東西有:
          </div>
          <div className="productLeftContent row mt-3 ">
            <div className="col-6 text-right p-0">雪板類 :</div>
            <div className="col-6 text-left p-0">單板/雙版</div>
            <div className="col-6 text-right p-0">男女裝 :</div>
            <div className="col-6 text-left p-0">外套/雪鞋</div>
            <div className="col-6 text-right p-0">
              配&nbsp;&nbsp;&nbsp;&nbsp;件 :
            </div>
            <div className="col-6 text-left p-0">護目鏡/護膝</div>
            <div className="col-6 text-right p-0">
              器&nbsp;&nbsp;&nbsp;&nbsp;材 :
            </div>
            <div className="col-6 text-left p-0">雪橇車/摩托車</div>
          </div>
          <button className="btn btn-primary mt-3 w-50 mx-auto">更多</button>
        </div>
      </div>
    </div>
  );
}

export default ProductRent;
