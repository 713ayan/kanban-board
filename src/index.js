/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional if you have an `index.css` file for styling
import App from './app'; // Ensure you have an App.js file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional if you have an `index.css` file for styling
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './index.css';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

