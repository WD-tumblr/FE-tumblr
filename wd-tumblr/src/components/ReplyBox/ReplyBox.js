import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReplyHeading from './ReplyHeading';
import ReplyContent from './ReplyContent';
import ReplyFooter from './ReplyFooter';
import DefaultUserProfileImg from '../../assets/images/pyramid.png';
import './ReplyBox.scss';
import { getLocalStorage, saveLocalStorage } from '../../helper';
import shortid from 'shortid';
import replyItemOptions from './replyItemOptions';

class ReplyBox extends Component {
  static propTypes = {
    userId: PropTypes.string,
    userProfileImg: PropTypes.string,
    postCardId: PropTypes.string,
  }

  state = {
    replys: [],
  }

  componentDidMount() {
    const replys = this.getReplys();
    this.setState({ replys });
  }

  getReplys = () => getLocalStorage(this.getStorageKey()) || []

  setStorage = (replys) => {
    saveLocalStorage(this.getStorageKey(), replys);
    this.setState({ replys });
  }

  getStorageKey = () => `REPLYKEY_${this.props.postCardId}`


  makeOptions = () => {
    const options = { ...replyItemOptions };
    const handlerMap = {
      REPORT: () => this.handleReport(),
      DELETE: id => this.handleDeleteReply(id),
    };
    Object.keys(options).forEach((option) => {
      options[option].handler = handlerMap[option];
    });
    return Object.values(options);
  }

  handleReport = () => {
    console.log('REPORT');
  }

  handleDeleteReply = (replyId) => {
    const replys = this.getReplys();
    const filtered = replys.filter(({ id }) => id !== replyId);
    this.setStorage(filtered);
  }

  addReply = (replyText) => {
    const { userId } = this.props;
    const id = shortid.generate();
    const replyData = {
      id,
      replyText,
      userId,
    };
    const replys = this.getReplys();
    const updateData = [...replys, replyData];
    this.setStorage(updateData);
  }

  render() {
    const {
      userId, userProfileImg = DefaultUserProfileImg, postCardId,
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
          options={this.makeOptions()}
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
