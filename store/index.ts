import { combineReducers} from 'redux';

import commonReducer from 'store/common/reducer';

export const rootReducer = combineReducers({
    common: commonReducer,
});

export type RootState = ReturnType<typeof rootReducer>