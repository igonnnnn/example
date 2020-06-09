import React from 'react';


class InputBox extends React.Component {
	render () {
		const { id, width } = this.props;
		this.getValue = (id) => {
			return this.id.value;
		}
		return (
			<div>
				<input type="text" style={ {width: width}} id= { id }></input>
			</div>
		);
	}
}
export default InputBox;
