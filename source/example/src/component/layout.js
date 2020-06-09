import React from 'react';

class Layout extends React.Component {
	render () {
		const { children } = this.props;
		return ( <div>{ children }</div>);
	}
}
class MainLayout extends React.Component {
	render () {
		const { children } = this.props;
		return ( <div style={ {width: '100%'}}>{ children }</div>);
	}
}
class LeftLayout extends React.Component {
	render () {
		const { children } = this.props;
		return ( <div style={ {width: '100%', float: 'left'}}>{ children }</div>);
	}
}
class RightLayout extends React.Component {
	render () {
		const { children } = this.props;
		return ( <div style={ {width: '100%', float: 'right'}}>{ children }</div>);
	}
}

export {Layout, MainLayout, LeftLayout, RightLayout};