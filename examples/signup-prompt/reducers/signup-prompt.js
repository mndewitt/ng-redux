import { GO_TO_REVIEW, GO_TO_SIGNUP } from '../actions/signup-prompt';

const initialState = {
	isSubscribing: false,
	showReview: false
}

export default function signupPrompt(state = initialState, action) {
  switch (action.type) {
  case GO_TO_REVIEW:
  case GO_TO_SIGNUP:
    return Object.assign({}, state, {
    	isSubscribing: action.isSubscribing,
    	showReview: action.showReview
    });
  default:
    return state;
  }
}
