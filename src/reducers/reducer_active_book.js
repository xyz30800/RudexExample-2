// State arugment is not application state, only the state
// this reducer is responsible for
export default function (state = null, action) {
	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	// If the action is anything else, we just return the current state  
	return state
}