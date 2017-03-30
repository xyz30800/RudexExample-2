export function selectBook(book) {
	// selectBook is an ActionCreator, it needs to return an action,
	// an object with a type property.
	// The action described is a user selecting the book.
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}