import React, { useEffect } from 'react';

import api from '~/services/api';
// import { Container } from './styles';

function Main() {
  useEffect(() => {
    api.post('/teste');
  }, []);

  return (
    <div>
      <p>Main</p>
    </div>
  );
}

export default Main;
