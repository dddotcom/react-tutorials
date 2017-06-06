import React, {Component} from 'react';

const Picture = props => (
  <div className="pic">
    <img src={`assets/images/${props.img}`}/>
    <div className="pic-stats">
      <p><i className="fa fa-heart" aria-hidden="true"></i> {props.likes} &nbsp; <i className="fa fa-comment" aria-hidden="true"></i> {props.comments}</p>
    </div>
  </div>
)

export default Picture;
