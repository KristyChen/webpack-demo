/**
 * Created by jessic on 2016/9/18.
 */
/*
var greeter=require("./Greeter.js");
document.getElementById("root").appendChild(greeter());*/
/*������es5���﷨*/

/*���½���es6�﷨*/
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';

render(<Greeter />, document.getElementById('root'));