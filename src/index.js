import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Welcome to my React Boilerplate: Minimum Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app'),
);

module.hot.accept();
