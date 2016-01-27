import * as SignupPromptActions from '../../actions/signup-prompt';

export default function singup() {
  return {
    restrict: 'E',
    controllerAs: 'signup',
    controller: SignupController,
    template: require('./signup.html'),
    scope: {}
  };
}

class SignupController {

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
