import {
  DATA_LOADED,
  DATA_REQUESTED,
  DATA_ERROR,
} from '../actions/actionConsts';

const dataLoaded = newItem => {
  return {
    type: DATA_LOADED,
    payload: newItem,
  };
};

const dataRequested = () => {
  return {
    type: DATA_REQUESTED,
  };
};

const dataError = error => {
  return {
    type: DATA_ERROR,
    payload: error,
  };
};

export { dataLoaded, dataRequested, dataError };
