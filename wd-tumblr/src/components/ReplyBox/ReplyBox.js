import React from 'react';
import Form from '../Form';
import Input from '../Input';
import DefaultUserProfileImg from '../../assets/images/pyramid.png';
import './ReplyBox.scss';


const randomMessage = () => {
  const randomPlaceholder = ['여기에 쓰세요', '시원하게 칭찬 한마디', '남기고 싶은 댓글은?', '대화 목록에 추가하기', '하고 싶은 얘기하기', '속시원하게 댓글 남기기'];
  const randomIdx = Math.floor(Math.random() * (randomPlaceholder.length));
  return randomPlaceholder[randomIdx];
};
const ReplyBox = ({
  userId = 'chany0310', replyCounts = 0, userProfileImg = DefaultUserProfileImg, replys,
}) => (
  <div
    className="replybox"
  >
    <div className="replbox__header">
      <p className="replyCounts">
        {`반응 ${replyCounts} 개`}
      </p>
    </div>
    <section className="replbox__body">
      <h3>
        <img src={userProfileImg} alt="" />
        <a>{userId}</a>
        님이 포스팅 했습니다
      </h3>
      {replys && <ul className="replys" />}
    </section>
    <div className="replbox__footer">
      <Form className="replybox__form">
        <Input placeholder={randomMessage()} />
        <button
          className="replbox__footer-submitBtn"
          type="submit"
          disabled
        >
        댓글
        </button>
      </Form>
    </div>
  </div>
);

export default ReplyBox;
