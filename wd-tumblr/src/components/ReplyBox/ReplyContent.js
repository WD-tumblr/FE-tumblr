import React from 'react';
import ReplyList from './ReplyList';


const ReplyContent = ({
  userId, userProfileImg, replys, options,
}) => (
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
    <ReplyList
      replys={replys}
      options={options}
    />
  </section>
);

export default ReplyContent;
