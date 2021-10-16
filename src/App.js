import React from 'react';
import AvatarImg from './Components/AvatarImg';
import Background from './Components/Background';

const App = () => {
  return (
    <React.Fragment>
      {/* Background */}
      <Background />
      {/* Info card */}
      <div class="portfolio-wrapper">
        <AvatarImg />
      </div>
    </React.Fragment>
  );
};

export default App;
