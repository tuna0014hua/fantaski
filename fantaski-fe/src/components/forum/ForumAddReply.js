import React, { useState, useEffect } from "react";
import { IMAGE_FORUM_URL, PUBLIC_URL } from "../../config/url";
import { getUserInfo } from "../../config/StatusShortcut";
import { insertReplyInfo } from "./moduleList";

function ForumAddReply({
  forum_id,
  replyCount,
  setReplyCount,
  replyList,
  setIfScrollDown,
  userInfo,
}) {
  const [replyContent, setReplyContent] = useState("");

  function handleChange(e) {
    setReplyContent(e.target.value);
  }
  async function handleSubmit() {
    if (replyContent === "") {
      alert("回覆內容不可空白哦！");
      return;
    } else {
      setIfScrollDown(true);
      await insertReplyInfo(forum_id, replyContent);
      setReplyContent("");
      setReplyCount(replyCount + 1);
      replyList[forum_id] = replyCount + 1;
    }
  }
  if (userInfo.code === 1201) {
    return <div>請先登入後才能回覆哦</div>;
  }
  return (
    <>
      <div className="reply-area">
        <label className="m-3 forum-reply-img">
          <img
            src={`${
              userInfo.image === null
                ? `${IMAGE_FORUM_URL}/snowman.svg`
                : userInfo.loginMethod === "thirdParty"
                ? `${userInfo.image}`
                : `${PUBLIC_URL}/${userInfo.image}`
            }`}
            alt="snowman-defult"
            className="object-fit"
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
