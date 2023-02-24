import React from 'react';
import { FC } from 'react';
import './App.scss'
import { RoutesRender } from './routes/Routes';

const App: FC = () => {
  return (
    <React.Fragment>
      <RoutesRender />
    </React.Fragment>
  );
}

export default App;
