import {HYDRATE} from 'next-redux-wrapper';
import * as types from 'store/common/type';
import {ActionTypes} from 'store/common/action';
interface InitState {
    grades:[];
    attrubutes:[];
    subjects:[];
    badges:[];
}

const initialState:InitState = {
    grades:[],
    attrubutes:[],
    subjects:[],
    badges:[],
}

// create your reducer
const reducer = (state:InitState = initialState , action:ActionTypes) => {
    switch (action.type) {
        case types.GET_COMMON_SUCCESS:{
            const {grades, attributes, subjects, badges} = action.data;
            return{
                ...state,
                grades,
                attributes,
                subjects,
                badges
            }
        }
        default:
            return state;
    }
};

export default reducer;