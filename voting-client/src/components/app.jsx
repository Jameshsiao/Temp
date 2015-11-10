import React from 'react';

export default React.createClass({
	render: function() {
		console.log('this.props.children');
		return this.props.children;
	}
});