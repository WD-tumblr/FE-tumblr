import React from 'react';
import PostCard from '../PostCard';
import DefaultImg from '../../assets/images/pyramid.png';
import './PostCardList.scss';

const mockData = [
  {
    userId: 1,
    cardImg: DefaultImg,
    cardImgAlt: 'alt',
    cardTitle: 'title01',
    cardBodytext: 'body01',
    cardTags: 1,
  },
  {
    userId: 2,
    cardImg: DefaultImg,
    cardImgAlt: 'alt',
    cardTitle: 'title02',
    cardBodytext: 'body02',
    cardTags: 2,
  },
  {
    userId: 3,
    cardImg: DefaultImg,
    cardImgAlt: 'alt',
    cardTitle: 'title03',
    cardBodytext: 'body03',
    cardTags: 3,
  },
];

const PostCardList = ({ postCards = mockData }) => (
  <ul className="postCardList__container">
    {postCards.map((v, i) => (<PostCard key={i} {...v} />))}
  </ul>
);

export default PostCardList;
