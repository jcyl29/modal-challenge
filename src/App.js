import React, { useState } from 'react';

import './App.css';
import MainDialog from './MainDialog';

const App = () => {
  const [showDialog, setShowDialog] = useState(false);

  const startDialog = () => {
    setShowDialog(true);
  }

  return (
      <div className="App container">
        <button className="start-app" onClick={startDialog}>Open me!</button>
        <MainDialog
          show={showDialog}
          setShowDialog={setShowDialog}
          resetSelectedMovie={() => setShowDialog(false)}
        />
      </div>
  );
};

export default App;
