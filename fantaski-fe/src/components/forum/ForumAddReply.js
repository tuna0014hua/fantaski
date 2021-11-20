import React, { useState, useEffect } from "react";
import { IMAGE_FORUM_URL } from "../../config/url";
import { insertReplyInfo } from "./moduleList";

function ForumAddReply({ forum_id, replyCount, setReplyCount, replyList }) {
  //會員id好之前先打在這，之後要判斷是否登入狀態才可以發文
  const [memberInfo, setMemberInfo] = useState({
    id: 1,
    name: "Eddie",
    gender: "male",
    image: "snowman.svg",
  });
  const [replyContent, setReplyContent] = useState("");

  function handleChange(e) {
    setReplyContent(e.target.value);
  }
  function handleSubmit() {
    if (replyContent === "") {
      alert("回覆內容不可空白哦！");
      return;
    } else {
      insertReplyInfo(forum_id, memberInfo.id, replyContent);
      setReplyContent("");
      setReplyCount(replyCount + 1);
      replyList[forum_id] = replyCount + 1;
    }
  }
  return (
    <>
      <div className="reply-area">
        <label className="m-3 forum-reply-img">
          <img
            src={` ${IMAGE_FORUM_URL}/${
              memberInfo.image === "" ? "snowman.svg" : memberInfo.image
            }`}
            alt="snowman-defult"
          />
        </label>
        <input
          type="text"
          value={replyContent}
          placeholder="新增留言:"
          required
          onChange={handleChange}
        />
        <button type=" button" className="reply-submit" onClick={handleSubmit}>
          新增
        </button>
      </div>
    </>
  );
}

export default ForumAddReply;
