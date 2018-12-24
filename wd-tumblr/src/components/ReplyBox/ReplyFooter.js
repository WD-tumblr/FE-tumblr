import React, { Component } from 'react';
import Form from '../Form';
import Input from '../Input';


const randomMessage = () => {
  const randomPlaceholder = ['여기에 쓰세요', '시원하게 칭찬 한마디', '남기고 싶은 댓글은?', '대화 목록에 추가하기', '하고 싶은 얘기하기', '속시원하게 댓글 남기기'];
  const randomIdx = Math.floor(Math.random() * (randomPlaceholder.length));
  return randomPlaceholder[randomIdx];
};


class ReplyFooter extends Component {
  state = {
    replyValue: '',
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ replyValue: value });
  }

  render() {
    const { userId, userProfileImg, replys } = this.props;
    return (
      <div className="replbox__footer">
        <Form className="replybox__form">
          <Input
            placeholder={randomMessage()}
            onChange={this.handleChange}
          />
          <button
            className="replbox__footer-submitBtn"
            type="submit"
            disabled={!this.state.replyValue}
          >
        댓글
          </button>
        </Form>
      </div>
    );
  }
}


export default ReplyFooter;
