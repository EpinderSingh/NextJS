import React from 'react';
import Router from 'next/router';

import User from '../../components/User';

const authIndexPage = () => (
  <div>
    <h1>The Auth Page</h1>
    <button onClick={() => Router.push('/')}>Go to Home</button>
    <User name="Epinder" age={38} />
  </div>
);

export default authIndexPage;
