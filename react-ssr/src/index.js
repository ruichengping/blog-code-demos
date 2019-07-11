import React from 'react';
import {hydrate} from 'react-dom';
import App from './app';
import Error from '@/pages/error';
hydrate(window.IS_ERROR?<Error/>:<App/>,document.getElementById("root"));