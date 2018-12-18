import React, { Component } from 'react';
import Modal from '../../components/Modal';
import Avatar from '../../components/Avatar';
import { saveLocalStorage, getLocalStorage, toggleState } from '../../helper';
import './DashBoard.scss';


class DashBoard extends Component {
  state = {
    show: false,
  }

  handlePostButtonClicked = () => {
    this.toggleShowState();
  }

  toggleShowState = () => {
    const { show } = this.state;
    const toggleShow = toggleState('show');
    this.setState(toggleShow);
  }

  hideModal = () => {
    this.setState({
      show: false,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { titleInput, tagInput, contentInput } = e.target;
    if (titleInput.value && contentInput.value) {
      const postData = {
        title: titleInput.value,
        content: contentInput.value,
        tag: tagInput.value,
      };
      this.savePostData(postData);
      this.hideModal();
    }
  }

  savePostData = (postData) => {
    const STORAGE_KEY = 'POST_KEY';
    const lastData = getLocalStorage(STORAGE_KEY) || [];
    lastData.push(postData);
    saveLocalStorage(STORAGE_KEY, lastData);
  }

  render() {
    return (
      <div className="dashboard__container">
        <section>
          <div className="postbar">
            <Avatar />
            <nav>
              <ul className="postbuttons">
                <li
                  className="postbutton"
                  onClick={this.handlePostButtonClicked}
                  name="text"
                >
                  <a>
                    <i className="icon__post-text" />
                    <span>텍스트</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <ul className="posts">
            <li>
              <Avatar />
            </li>
            <li>
              <div className="avatar" />
            </li>
          </ul>
        </section>
        <Modal show={this.state.show} onClick={this.toggleShowState}>
          <section className="postform__container">
            <Avatar />
            <form className="postform" onSubmit={this.handleSubmit}>
              <div className="postform__header">
                <div className="dropdown">
                  <span>userId</span>
                </div>
                <div className="settingbutton">
                  <span>SettingButton</span>
                </div>
              </div>
              <input
                type="text"
                placeholder="제목"
                name="titleInput"
              />
              <textarea
                type="text"
                placeholder="여기에 내용을 쓰세요"
                name="contentInput"
              />
              <input
                type="text"
                placeholder="#태그"
                name="tagInput"
              />
              <div className="form__toolbar">
                <button onClick={this.hideModal}>닫기</button>
                <button>포스팅</button>
              </div>
            </form>
          </section>
        </Modal>
      </div>
    );
  }
}


export default DashBoard;
