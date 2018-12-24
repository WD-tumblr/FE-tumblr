import React, { Component } from 'react';
import PostCard from '../PostCard';
import DefaultImg from '../../assets/images/pyramid.png';
import './PostCardList.scss';

class PostCardList extends Component {
  render() {
    return (
      <ul className="postCardList__container">
        {this.props.postCards.map((v, i) => (<PostCard key={i} {...v} handleSetPostCards={this.props.handleSetPostCards} />))}
      </ul>
    );
  }
}

export default PostCardList;
