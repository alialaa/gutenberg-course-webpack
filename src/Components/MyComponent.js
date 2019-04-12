import React from 'react';

class MyComponent extends React.Component {
	render() {
		//return <h1>{this.props.title}</h1>
		return React.createElement('h1', null, `Title: ${this.props.title}`)
	}
}


export default MyComponent;