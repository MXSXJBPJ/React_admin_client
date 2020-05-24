/*入口js*/

import React from 'react';
import ReactDOM from 'react-dom';

//引入自定义模块
//必须先加点(./)，至于是./还是../看路径，同一目录下./
import App from './App'

//将App组件标签渲染到index页面的div上
ReactDOM.render(<App />, document.getElementById('root'));

