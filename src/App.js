import React from 'react';
import AvatarImg from './Components/AvatarImg';
import Background from './Components/Background';
import SocialMediaIcons from './Components/SocialMediaIcons';

const App = () => {
  return (
    <div className="card-wrapper">
      {/* Background */}
      <Background />
      {/* Info card */}
      <div class="portfolio-wrapper">
        <AvatarImg />
        <SocialMediaIcons />
      </div>
    </div>
  );
};

export default App;
