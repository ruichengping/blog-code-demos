import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import User from './src/pages/user';
import Login from './src/pages/login';
const app = express();
const urlMaptoComponent = {
  "/login":Login,
  "/user":User
}
app.use(express.static("dist"))
app.get('*',function(req,res){
  const MatchedComponent = urlMaptoComponent[req.path];
  console.log(MatchedComponent.name)
  const content = renderToString(<MatchedComponent/>);
  res.send(`
  <html>
    <body>
      <div id="root">${content}</div>
      <script src="/client/index.js"></script>
    </body>
  </html>
  `);
});
app.listen(3000);