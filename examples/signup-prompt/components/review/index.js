import * as SignupPromptActions from '../../actions/signup-prompt';

export default function review() {
  return {
    restrict: 'E',
    controllerAs: 'review',
    controller: ReviewController,
    template: require('./review.html'),
    scope: {}
  };
}

class ReviewController {

  constructor($ngRedux, $scope) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, SignupPromptActions)(this);
    $scope.$on('$destroy', unsubscribe);
  }

  // Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    return {
      signupPrompt: state.signupPrompt
    };
  }
}
