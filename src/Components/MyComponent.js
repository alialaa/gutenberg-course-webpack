import React from 'react';

class MyComponent extends React.Component {
	render() {
		//return React.createElement('h1', null, `Title: ${this.props.title}`)
		return <h1>{this.props.title}</h1>
	}
}


export default MyComponent;