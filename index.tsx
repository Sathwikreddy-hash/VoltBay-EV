import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mountNode = document.getElementById('root');

if (!mountNode) {
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);
  const root = ReactDOM.createRoot(rootDiv);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const root = ReactDOM.createRoot(mountNode);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}