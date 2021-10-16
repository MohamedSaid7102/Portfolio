import React from 'react';

import { Avatar } from '@material-ui/core';

const AvatarImg = () => {
  return (
    <div className="avatar-wrapper">
      <Avatar
        alt="Mohamed Shelf"
        src="https://cdn.dribbble.com/users/962321/screenshots/15175871/media/060adcd6e25e02a9d7d4ee2efec58020.jpeg?compress=1&resize=1600x1200"
      />
      <h1 className="my-name">Mohamed S.Shelf</h1>
    </div>
  );
};

export default AvatarImg;
