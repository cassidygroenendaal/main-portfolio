import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import API from '../../lib/API';
// import Navigation from '../../components/Navigation';
import { HomePage, CrosswordPage, NotFoundPage } from '../../pages';

import './styles.css';

const App = () => {
  // componentDidMount() {
  // 	API.Test
  // 		.testAll()
  // 		.then((response) => response.data)
  // 		.catch((err) => console.log(err));
  // }

  return (
    <div className='App'>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/p/Crossword' component={CrosswordPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
