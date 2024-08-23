import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import Brand from './Brand/Brand';
import Footer from './Footer/footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Footer />
    <Brand />
  </React.StrictMode>
);