import { useState } from 'react';
import './App.scss';
import { CardOne, CardTwo } from './components';
import { FormControlLabel, Switch } from "@mui/material";

function App() {
  const [isFirstCardShow, setIsFirstCardShow] = useState(true);

  return (
    <div className="app">
      <FormControlLabel control={<Switch defaultChecked />} label={isFirstCardShow ? "Card 1" : "Card 2"}  onChange={() => setIsFirstCardShow(prevValue => !prevValue)}/>
      {
        isFirstCardShow
          ? <CardOne />
          : <CardTwo />
      }
    </div>
  );
}

export default App;
