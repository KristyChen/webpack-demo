/**
 * Created by jessic on 2016/9/18.
 */
/*
*返回包含问候信息的html元素信息的函数
* @module Greeter
*
* */
/*var config=require("./config.json");
module.exports=function(){
    var greet=document.createElement('div');
    greet.textContent=config.greetText;
    return greet;
};*/
/*以上是es5的语法*/

/*接下来是es6语法*/
import React,{Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';

class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
            {config.greetText}
            </div>
         );
    }
}
export default Greeter
