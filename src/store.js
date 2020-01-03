import { createStore } from 'redux';

function modalToggle(state= false, action) {
	state = action.type;
	return state
}

export let store = createStore(modalToggle);