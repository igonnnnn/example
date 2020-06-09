import React from 'react';

class Table extends React.Component {
	render () {
		const { children } = this.props;
		return ( <div><table style={ {width: '100%'}}>{ children }</table></div>);
	}
}
class TableRow extends React.Component {
	render () {
		const { children } = this.props;
		return (<tr>{ children }</tr>);
	}
}
class TableColth extends React.Component {
	render () {
		const { width, children } = this.props;
		return (<th style= {{width: width}}>{ children }</th>);
	}
}

class TableColtd extends React.Component {
	render () {
		const { width, children } = this.props;
		return (<td style= {{width: width}}>{ children }</td>);
	}
}
class TableHead extends React.Component {
	render () {
		const { children } = this.props;
		return (<thead>{ children }</thead>);
	}
}
class TableBody extends React.Component {
	render () {
		const { children } = this.props;
		return (<tbody>{ children }</tbody>);
	}
}
export { Table, TableRow, TableColth, TableColtd, TableHead, TableBody };
