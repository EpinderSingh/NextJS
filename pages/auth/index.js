import React from 'react';
import Router from 'next/router';

const authIndexPage = () => (
  <div>
    <h1>The Auth Page</h1>
    <button onClick={() => Router.push('/')}>Go to Home</button>
  </div>
);

export default authIndexPage;
