import updateDataList from './dataList';
import updateBasket from './updateBasket';

const reducer = (state, action) => {
  return {
    dataList: updateDataList(state, action),
    basket: updateBasket(state, action),
  };
};

export default reducer;
