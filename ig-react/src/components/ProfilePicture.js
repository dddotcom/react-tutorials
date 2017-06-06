import React, {Component} from 'react';

const ProfilePicture = props => (
  <div>
    <img className="profile-img" src={`assets/images/${props.img}`}/>
  </div>
)

export default ProfilePicture;
