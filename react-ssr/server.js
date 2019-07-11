import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import proxy from 'http-proxy-middleware';
import {createRouter,routeConfs} from '@/router';
import { matchPath } from "react-router-dom";
import getStore from '@/store';
const app = express();
const findProxyTarget = (path)=>{
  console.log(path.split('/'));
  switch(path.split('/')[1]){
    case 'a':
      return 'http://localhost:8000';
    case 'b':
      return 'http://localhost:8001';
    default:
      return "http://localhost:8002"
  }
}
app.use(express.static("dist"))
app.use('/api',function(req,res,next){
  proxy({
    target:findProxyTarget(req.path),
    pathRewrite:{
      "^/api/a":"/api",
      "^/api/b":"/api"
    },
    changeOrigin: true })(req,res,next);
})
app.get('*',function(req,res){
  const context = {};
  const store =  getStore();
  const promises = [];
  routeConfs.forEach((route)=> {
    const match = matchPath(req.path, route);
    if(match&&route.loadData){
      promises.push(route.loadData(store));
    };
  });
  Promise.all(promises).then(()=>{
    const content = renderToString(<Provider store={store}>
      {createRouter('server')({
          location:req.url,
          context
      })}
    </Provider>);
    if(context.url){
      res.redirect(context.url);
    }else{
      if(context.NOT_FOUND) res.status(404);
      res.send(`
      <html>
        <script>
          window.INITIAL_STATE = ${JSON.stringify(store.getState())}
        </script>
        <body>
          <div id="root">${content}</div>
          <script src="/client/index.js"></script>
        </body>
      </html>
      `);
    }
  }).catch(()=>{
    res.status(500);
    res.send('500');
  });
});
app.listen(3000);