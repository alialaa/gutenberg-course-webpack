import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';
import './index.scss';
	
//ReactDom.render(<MyComponent title="Hey" />, document.getElementById('root'))
ReactDOM.render(React.createElement(MyComponent, {title: 'Hello'}),document.getElementById('root'))