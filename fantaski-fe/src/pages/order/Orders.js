// 內建共用元件
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

// 不同階段渲染元件
import FirstStep from "../../components/orders/FirstStep";
import SecondStep from "../../components/orders/SecondStep";
import ThirdStep from "../../components/orders/ThirdStep";
import OrderContent from "../../components/orders/OrderContent";

// 頁面通用元件
import ProgressBar from "../../components/orders/ProgressBar";
import PrevStepIcon from "../../components/orders/PrevStepIcon";
import NextStepIcon from "../../components/orders/NextStepIcon";
import OrderSubmitIcon from "../../components/orders/OrderSubmitIcon";
import { PRODUCTIMAGE_URL, ORDERIMAGE_URL } from "../../config/url";
import { API_URL } from "../../config/url";
import { getMemberPoints } from "../../components/orders/ModuleDb";

function Orders(props) {
  const { setItemNumber, itemNumber } = props;
  // 為了購物車第一步驟改變日期和數量而設的
  const [customerChoose, setCustomerChoose] = useState({
    date: "",
    number: "",
  });

  // 從資料庫抓member的資料回來
  const [memberPoints, setMemberPoints] = useState(null);
  useEffect(() => {
    getMemberPoints(setMemberPoints);
  }, []);

  // 為了判斷切換為哪個階段
  const [step, setStep] = useState(1);

  // 點選上一步、下一步可以回到頁面最上面
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 和商品頁一樣，如果重新整理進來，購物車數量不會歸零
  let storage = localStorage;
  function handleAddNumber() {
    let itemString = storage["addItemList"];
    let items = itemString.substr(0, itemString.length - 2).split(", ");
    setItemNumber(Number(items.length));
  }
  // 一進到頁面(包括重新整理)，判判斷如果addItemList裡面是空字串，就設購物車數字為0，不然就正常呼叫函式
  useEffect(() => {
    if (storage["addItemList"] === "") {
      setItemNumber(0);
    } else {
      handleAddNumber();
    }
  }, []);

  const [pointUsed, setPointUsed] = useState(0);

  // ------------------------------------------------------------------------------------
  return (
    <>
      <div className="progress_bar_bg">
        <div className="progress_bar">
          <ProgressBar
            step={step}
            setStep={setStep}
            scrollToTop={scrollToTop}
          />
        </div>
      </div>
      {step === 1 && (
        <>
          <FirstStep
            step={step}
            setStep={setStep}
            customerChoose={customerChoose}
            setCustomerChoose={setCustomerChoose}
            memberPoints={memberPoints}
            setMemberPoints={setMemberPoints}
            pointUsed={pointUsed}
            setPointUsed={setPointUsed}
            setItemNumber={setItemNumber}
            itemNumber={itemNumber}
          />
          <div className="box3 d-flex justify-content-end m-5">
            <NextStepIcon
              step={step}
              setStep={setStep}
              scrollToTop={scrollToTop}
            />
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <SecondStep
            step={step}
            setStep={setStep}
            memberPoints={memberPoints}
            setMemberPoints={setMemberPoints}
            pointUsed={pointUsed}
            setPointUsed={setPointUsed}
          />
          <div className="box3 d-flex justify-content-end m-5">
            <PrevStepIcon
              step={step}
              setStep={setStep}
              scrollToTop={scrollToTop}
            />
            <NextStepIcon
              step={step}
              setStep={setStep}
              scrollToTop={scrollToTop}
            />
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <ThirdStep
            step={step}
            setStep={setStep}
            scrollToTop={scrollToTop}
            memberPoints={memberPoints}
            pointUsed={pointUsed}
            setPointUsed={setPointUsed}
          />
          {/* <div className="box3 d-flex justify-content-end m-5">
            <PrevStepIcon
              step={step}
              setStep={setStep}
              scrollToTop={scrollToTop}
            />
            <OrderSubmitIcon />
          </div> */}
        </>
      )}
    </>
  );
}

export default withRouter(Orders);
