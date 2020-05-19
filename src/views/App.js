import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Cards, Header } from './components';

const App = ({ fetchProductsPending }) => {

  useEffect(() => {
    fetchProductsPending();  
  }, [fetchProductsPending]);

  return (
    <>
      <Header/>
      <Cards/>
    </>
  );
}

App.propTypes = {
  fetchProductsPending: PropTypes.func.isRequired
};

export default App;
