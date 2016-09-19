/**
 * Created by jessic on 2016/9/18.
 */
/*
var greeter=require("./Greeter.js");
document.getElementById("root").appendChild(greeter());*/
/*以上是es5的语法*/

/*以下将是es6语法*/
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';

render(<Greeter />, document.getElementById('root'));