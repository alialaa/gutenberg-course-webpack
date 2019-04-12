import React, {Fragment} from 'react';

class MyComponent extends React.Component {
	render() {
		return 
		<Fragment>
			<h1>{this.props.title}</h1>
			<p></p>
		</Fragment>
		//return React.createElement('h1', null, `Title: ${this.props.title}`)
	}
}


export default MyComponent;