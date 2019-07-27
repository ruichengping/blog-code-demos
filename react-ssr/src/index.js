import React from 'react';
import {hydrate} from 'react-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import App from './app';
const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}
hydrate(
  <StyleContext.Provider value={{ insertCss }}>
    <App />
  </StyleContext.Provider>,
  document.getElementById("root")
);