export const GO_TO_REVIEW = 'GO_TO_REVIEW';
export const GO_TO_SIGNUP = 'GO_TO_SIGNUP';

export function goToReview(isSubscribing) {
  return {
    type: GO_TO_REVIEW,
    isSubscribing: isSubscribing,
    showReview: true
  };
}

export function goToSignup() {
  return {
    type: GO_TO_SIGNUP,
    isSubscribing: false,
    showReview: false
  };
}