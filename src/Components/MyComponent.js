import React, {Fragment} from 'react';
import './MyComponent.scss';

class MyComponent extends React.Component {
	render() {
		console.log('wdwd')
		// return 
		// <Fragment>
		// 	<h1>{this.props.title}</h1>
		// 	<p></p>
		// </Fragment>
		//return React.createElement('h1', null, `Title: ${this.props.title}`)
		return <div className="x">
				{[1,2,3].map(item => <div>{item}</div>)}
		</div>
	}
}


export default MyComponent;