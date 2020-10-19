import * as types from "store/common/type";

export interface GetCommon{
    type: typeof types.GET_COMMON_REQUEST;
}

export interface GetCommonSuccess{
    type: typeof types.GET_COMMON_SUCCESS;
    data: {
        grades:[]
        attributes:[]
        subjects:[]
        badges:[]
    }
}
export interface GetCommonFailure{
    type: typeof types.GET_COMMON_FAILURE;
}

export const getCommon = () => {
    return {
        type: types.GET_COMMON_REQUEST
    }
}

export type ActionTypes = GetCommon | GetCommonSuccess | GetCommonFailure;

