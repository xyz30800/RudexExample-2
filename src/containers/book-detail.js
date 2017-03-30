import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class BookDetail extends Component {
	render() {
		if (!this.props.book){
			return <div>Select a book to get started</div>;
		}

		return (
			<div>
				<h3>detail for :</h3>
				<div>1. {this.props.book.title}</div>
				<div>2. {this.props.book.pages}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook 
	}
}

export default connect(mapStateToProps)(BookDetail);