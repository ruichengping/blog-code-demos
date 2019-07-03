import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter,Route} from 'react-router';
import Login from '@/pages/login';
import User from '@/pages/user';
const app = express();
app.use(express.static("dist"))
app.get('*',function(req,res){
  console.log(req.path);
  const content = renderToString(<div>
    <StaticRouter location={{ pathname: req.path }}>
      <Route path="/user" component={User}></Route>
      <Route path="/login" component={Login}></Route>
    </StaticRouter>
  </div>);
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