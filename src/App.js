import React from 'react';
import InvitedTab from './components/InvitedTab';
import AcceptedTab from './components/AcceptedTab';

const App = () => {
  return (
      <div className="container mt-5">
          <InvitedTab />
          <AcceptedTab />
      </div>
  );
};

export default App;