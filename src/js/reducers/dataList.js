import {
  DATA_REQUESTED,
  DATA_LOADED,
  DATA_ERROR,
} from '../actions/actionConsts';

const updateDataList = (state, action) => {
  if (state === undefined) {
    return {
      data: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case DATA_REQUESTED:
      return {
        data: [],
        loading: true,
        error: null,
      };

    case 'DATA_LOADED':
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case DATA_ERROR:
      return {
        data: [],
        error: action.payload,
      };

    default:
      return state.dataList;
  }
};

export default updateDataList;
