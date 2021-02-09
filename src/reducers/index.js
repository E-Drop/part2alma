import { combineReducers } from 'redux';

import boats from './boats';

// event we only have one for this little tecnical test, is better do it this way because you have everything ready for future ampliations
export default () => combineReducers({
    boats,
});