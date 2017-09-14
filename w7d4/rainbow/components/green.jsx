import React from 'react';

const Green = () => (
  <div>
    <h2 className="green"></h2>
      <Route path="/green" component={Green} />
  </div>
);

export default Green;
