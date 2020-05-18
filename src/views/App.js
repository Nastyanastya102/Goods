import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from './containres/Card';
import Header from './containres/Header';
import PopUp from './containres/PopUp';

const App = ({ fetchProductsPending }) => {

  useEffect(() => {
    fetchProductsPending();  
  }, [fetchProductsPending]);

  return (
    <>
      <Header/>
      <Card/>
      <PopUp/>
    </>
  );
}

App.propTypes = {
  fetchProductsPending: PropTypes.func
};

export default App;
