/*应用根组件*/

/*
* 定义组件（有两种方式）
* 简单组件用函数定义
* 复杂组件用类定义
* 简单和复杂区别是有没有状态
*
* */
import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
export default class App extends Component{

render(){
    return(
      
        <BrowserRouter>
          {/*BrowserRouter和HashRouter的区别
            localhost:3001/login
            localhost:3001/#/login

        
        */}
        {/*因为这两个路由为第一层路由所以要用到路由器 BroesweRouter */}
        <Switch>{/*只匹配其中一个 */}
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Admin}></Route>
        </Switch>
        </BrowserRouter>
    )
}

}
