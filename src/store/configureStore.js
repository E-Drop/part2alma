import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});


export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer(),
    initialState,
    composeWithDevTools(
      applyMiddleware(
        loggerMiddleware,
      ),
    )
  );
}