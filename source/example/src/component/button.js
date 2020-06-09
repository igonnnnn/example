import React from 'react';
class Button extends React.Component {
	render () {
		const { width, value } = this.props;
		return (
			<div>
				<input type="button" style={ {width: width, float: 'right'}} value={value}></input>
			</div>
		);
	}
}
export default Button;
