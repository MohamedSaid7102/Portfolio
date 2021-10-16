import React from 'react';
import AvatarImg from './Components/AvatarImg';
import Background from './Components/Background';
import SocialMediaIcons from './Components/SocialMediaIcons';

const App = () => {
  return (
    <React.Fragment>
      {/* Background */}
      <Background />
      {/* Info card */}
      <div class="portfolio-wrapper">
        <AvatarImg />
        <SocialMediaIcons />
      </div>
    </React.Fragment>
  );
};

export default App;
