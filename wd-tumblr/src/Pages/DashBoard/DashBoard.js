import React, { Component } from 'react';
import Modal from '../../components/Modal'
import './DashBoard.scss';


class DashBoard extends Component {
  render() {
    return (
      <div className="dashboard__container">
      <section>
        <div className="postbar">
          <div className="avatar"></div>
          <nav>
            <ul class="postbuttons">
              <li>
                <a>
                  텍스트
                  <i className="icon__post-text"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>  
        <ul className="posts">
          <li>
            <div className="avatar"></div>
          </li>
          <li>
            <div className="avatar"></div>
          </li>
        </ul>      
      </section> 
         <Modal />
      </div>
    );
  }
}


export default DashBoard;
