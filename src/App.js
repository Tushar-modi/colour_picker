// App.js
import React from 'react';
import ColorPicker from './ColorPicker';

const colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#2E86C1', '#17A589', '#239B56', '#D4AC0D'];

function App() {
  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
