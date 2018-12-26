import React, { Component } from 'react';
import shortid from 'shortid';
import Modal from '../../components/Modal';
import Avatar from '../../components/Avatar';
import { saveLocalStorage, getLocalStorage, toggleState } from '../../helper';
import './DashBoard.scss';
import Form from '../../components/Form';
import Input from '../../components/Input';
import PostCardList from '../../components/PostCardList';


class DashBoard extends Component {
  state = {
    show: false,
    userId: 'Dali',
    postCards: [],
  }

  componentDidMount() {
    this.setPostCards();
  }

  setPostCards() {
    const STORAGE_KEY = 'POST_KEY';
    getLocalStorage(STORAGE_KEY) && this.setState({ postCards: [...getLocalStorage(STORAGE_KEY)] });
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  }

  handlePostButtonClicked = () => {
    this.toggleShowState();
  }

  toggleShowState = () => {
    const toggleShow = toggleState('show');
    this.setState(toggleShow);
  }

  hideModal = () => {
    this.setState({
      show: false,
    });
  }

  handleSubmit = (e) => {
    const {
      userId, title, content, tags,
    } = this.state;
    if (title && content) {
      const uniqueId = shortid.generate();
      const postData = {
        uniqueId, userId, title, content, tags,
      };
      this.savePostData(postData);
      this.hideModal();
    }
  }

  savePostData = (postData) => {
    const STORAGE_KEY = 'POST_KEY';
    let lastData = getLocalStorage(STORAGE_KEY) || [];
    lastData = [postData, ...lastData];
    saveLocalStorage(STORAGE_KEY, lastData);
    this.setState({ postCards: [...lastData] });
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
          <PostCardList
            userId={this.state.userId}
            postCards={this.state.postCards}
            handleSetPostCards={this.setPostCards.bind(this)}
          />
        </section>
        <Modal show={this.state.show} onClick={this.toggleShowState}>
          <section className="postform__container">
            <Avatar />
            <Form
              className="postform"
              onSubmit={this.handleSubmit}
            >
              <div className="postform__header">
                <div className="dropdown">
                  <span>userId</span>
                </div>
                <div className="settingbutton">
                  <span>SettingButton</span>
                </div>
              </div>
              <Input
                type="text"
                placeholder="제목"
                name="title"
                onChange={this.handleOnChange}
                required
              />
              <textarea
                type="text"
                placeholder="여기에 내용을 쓰세요"
                name="content"
                onChange={this.handleOnChange}
                required
              />
              <Input
                type="text"
                placeholder="#태그"
                name="tags"
                onChange={this.handleOnChange}
              />
              <div className="form__toolbar">

                <button onClick={this.hideModal}>
                  닫기
                </button>
                <button>포스팅</button>
              </div>
            </Form>
          </section>
        </Modal>

      </div>
    );
  }
}


export default DashBoard;
