import React, { Component } from 'react';
import ReplyHeading from './ReplyHeading';
import ReplyContent from './ReplyContent';
import ReplyFooter from './ReplyFooter';
import DefaultUserProfileImg from '../../assets/images/pyramid.png';
import './ReplyBox.scss';
import { getLocalStorage, saveLocalStorage } from '../../helper';
import shortid from 'shortid';

class ReplyBox extends Component {
  state = {
    replys: [],
  }

  componentDidMount() {
    const { postCardId } = this.props;
    const STORAGE_KEY = `REPLYKEY_${postCardId}`;
    const replyStore = getLocalStorage(STORAGE_KEY);
    replyStore && this.setState({ replys: [...replyStore] });
  }

  addReply = (replyText) => {
    const { userId } = this.props;
    const id = shortid.generate();
    const replyData = {
      id,
      replyText,
      userId,
    };
    const { postCardId } = this.props;
    const STORAGE_KEY = `REPLYKEY_${postCardId}`;
    let replys = getLocalStorage(STORAGE_KEY) || [];
    replys = [...replys, replyData];
    saveLocalStorage(STORAGE_KEY, replys);
    this.setState({ replys });
  }

  render() {
    const {
      userId, replyCounts = 0, userProfileImg = DefaultUserProfileImg, postCardId,
    } = this.props;
    const { replys } = this.state;
    return (
      <div
        className="replybox"
      >
        <ReplyHeading replyCounts={replys.length} />
        <ReplyContent
          userId={userId}
          userProfileImg={userProfileImg}
          replys={replys}
        />
        <ReplyFooter
          postCardId={postCardId}
          replys={replys}
          addReply={this.addReply}
        />
      </div>
    );
  }
}


export default ReplyBox;
