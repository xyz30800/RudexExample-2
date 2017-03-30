import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {	
	renderList() {
		// Props from the 'mapStateToProps' function
		return this.props.books.map(bookEach => {
			return (
				<li 
					key={bookEach.title} 
					onClick={() => this.props.selectBook(bookEach)}
					className="list-group-item">{bookEach.title}
				</li>
			)
		});
	};
	render() {
		// console.log(this.props.asdf) => output: 123
		return (
			<ul className="list-group col-md-4">
				{this.renderList()}
			</ul>
		);
	};
}

// We want to take some state and map it to the props of our container  
function mapStateToProps(state) {
	// Whatever is returned will show up as props
	// inside of BookList
	// If the state ever change this component will re-render with the new list of books
	return {
		// asdf: 123
		books: state.books
	};
}

// Anything returned from this function will end up as props
// on the BookList container.
// We want to take a action creator and make it available to be called on side of the container.
// This part of appliction actually cares about that action is the reducers.
// The purpose of this function is specifically to take what gets returned 
// from select book and makes sure that it flows throught all the reducers. 
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed
	// to all of our reducers.
	return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote bookList from a component to a cintainer - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop.  
export default connect(mapStateToProps, mapDispatchToProps)(BookList);