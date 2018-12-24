import React from 'react';


const ReplyContent = ({ userId, userProfileImg, replys }) => (
  <section className="replbox__body">
    <div className="replbox__body-header">
      <a>
        <img src={userProfileImg} alt="" />
      </a>
      <a>
        {userId}
      </a>
      <span>
          님이 포스팅 했습니다
      </span>
    </div>
    {replys && <ul className="replys" />}
  </section>
);

export default ReplyContent;
