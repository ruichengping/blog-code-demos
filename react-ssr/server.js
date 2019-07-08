import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {createRouter} from '@/router';

const app = express();
app.use(express.static("dist"))
app.get('*',function(req,res){
  const context = {};
  const content = renderToString(<div>
    {createRouter('server')({
        location:req.url,
        context
    })}
  </div>);
  console.log(context.url);
  if(context.url){
    res.redirect(302,context.url);
  }else{
    res.send(`
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="/client/index.js"></script>
      </body>
    </html>
    `);
  }
});
app.listen(3000);