import angular from 'angular';
import ngRedux from 'ng-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import signup from './components/signup';
import review from './components/review';
import { default as DevTools, runDevTools} from './devTools';

angular.module('signupPrompt', [ngRedux])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(rootReducer, [thunk], [DevTools.instrument()]);
  })
  .directive('ngrSignup', signup)
  .directive('ngrReview', review)
  .run(runDevTools);
