import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

// 引入各分頁(後續寫程式可更動) 頁面用元件

// 課程
import Skill from "./pages/course/Skill";
import Beginner from "./pages/course/Beginner";
import Sled from "./pages/course/Sled";
import Igloo from "./pages/course/Igloo";
// 商品
import Products from "./pages/product/Products";
import Orders from "./pages/order/Orders";
import Home from "./pages/Home";
import MountainRoute from "./pages/MountainRoute";

// 論壇
import Forum from "./pages/forums/Forum";
import NewPost from "./pages/forums/NewPost";
// import Skiexperience from "./pages/forums/Skiexperience";
// import Courseshare from "./pages/forums/Courseshare";
// import Equipment from "./pages/forums/Equipment";

import Login from "./pages/Login";
// footer 相關連結
// import Aboutus from "./pages/footer/Aboutus";
// import Joinus from "./pages/footer/Joinus";
// import Terms from "./pages/footer/Terms";
// import Servicepolicy from "./pages/footer/Servicepolicy";
// import Privacy from "./pages/footer/Privacy";

//member會員
import Member from "./pages/member/Member";
import MemberForum from "./pages/member/MemberForum";
import Record from "./pages/member/Record";
import MemberCollect from "./pages/member/MemberCollect";
import MemberComment from "./pages/member/MemberComment";
// ===========================================

// 組合用元件
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/share/Navbar";
import Footer from "./components/share/Footer";
import Gotop from "./components/share/Gotop";

const courses = ["初體驗", "技能班", "雪橇車", "建冰屋"];

function App() {
  //傳入course狀態(使用者要看哪個course)
  const [showCourse, setShowCourse] = useState();

  // nabar上購物車的數字
  const [itemNumber, setItemNumber] = useState(0);

  return (
    <>
      <Router>
        <Navbar
          courses={courses}
          setShowCourse={setShowCourse}
          setItemNumber={setItemNumber}
          itemNumber={itemNumber}
        />
        {/* LOGO+標題+導覽列+上方選單 */}
        {/* 主內容區 */}
        {/* 匹配路由表(路徑單一匹配) */}
        {/* 切換顯示的元件畫面放在這下面 */}
        {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
        {/* 暫時代替navbar <br /> */}
        {/* <Link to="/Products">到產品</Link>&nbsp;
        <Link to="/Orders">到訂單</Link>&nbsp;
        <Link to="/course/commentsinmemer">我的點評</Link>&nbsp;
        <Link
          to="/course/beginner"
          onClick={() => {
            setShowCourse(courses[0]);
          }}
        >
          到課程-初體驗
        </Link> */}
        &nbsp;
        <Link to="/Member">到會員</Link>
        <ScrollToTop>
          <Switch>
            <Route path="/course/beginner">
              <Beginner
                courses={courses}
                showCourse={showCourse}
                setShowCourse={setShowCourse}
              />
            </Route>
            <Route path="/course/beginner">
              <Beginner
                courses={courses}
                showCourse={showCourse}
                setShowCourse={setShowCourse}
              />
            </Route>
            <Route path="/course/skill">
              <Skill
                courses={courses}
                showCourse={showCourse}
                setShowCourse={setShowCourse}
              />
            </Route>
            <Route path="/course/sled">
              <Sled
                courses={courses}
                showCourse={showCourse}
                setShowCourse={setShowCourse}
              />
            </Route>
            <Route path="/course/igloo">
              <Igloo
                courses={courses}
                showCourse={showCourse}
                setShowCourse={setShowCourse}
              />
            </Route>
            <Route path="/products">
              <Products setItemNumber={setItemNumber} itemNumber={itemNumber} />
            </Route>
            <Route path="/Orders">
              <Orders setItemNumber={setItemNumber} itemNumber={itemNumber} />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/member">
              <Member setShowCourse={setShowCourse} />
            </Route>
            <Route path="/forum/new-post">
              <NewPost />
            </Route>
            <Route path="/memberRecord">
              <Record />
            </Route>
            <Route path="/memberForum">
              <MemberForum />
            </Route>
            <Route path="/memberCollect">
              <MemberCollect />
            </Route>
            <Route path="/memberComment">
              <MemberComment />
            </Route>

            <Route path="/forum">
              <Forum />
            </Route>
            <Route path="/mountainroute">
              <MountainRoute />
            </Route>
            <Route path="/">
              <Home />
            </Route>

            {/* footer有時間再處理 勿刪!!*/}
            {/* <Route path="/privacy" exact>
              <Privacy />
            </Route>
            <Route path="/servicepolicy" exact>
              <Servicepolicy />
            </Route>
            <Route path="/terms" exact>
              <Terms />
            </Route>
            <Route path="/joinus" exact>
              <Joinus />
            </Route>
            <Route path="/aboutus" exact>
              <Aboutus />
            </Route> */}
          </Switch>
          {/* end 匹配路由表 */}
        </ScrollToTop>
        <Gotop />
        <Footer />
        {/* 頁尾+版權訊息 */}
      </Router>
    </>
  );
}

export default App;
