import React, { Component } from 'react';
import { connect } from 'react-redux';
import withDataStoreContext from '../hoc/withDataStoreContext';

import { productAddedToBasket } from '../../actions/basket';
import { dataLoaded, dataRequested, dataError } from '../../actions/data';

import ProductList from './productList.jsx';
import Spinner from '../spinner/spinner.jsx';
import ErrorIndicator from '../error-indicator/error-indicator.jsx';

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { data, loading, error, onAddedToBasket } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return <ProductList data={data} onAddedToBasket={onAddedToBasket} />;
  }
}

const mapStateToProps = ({ dataList: { data, loading, error } }) => {
  return { data, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { dataStoreService } = ownProps;
  return {
    fetchData: () => {
      dispatch(dataRequested());
      dataStoreService
        .getData()
        .then(data => dispatch(dataLoaded(data)))
        .catch(error => dispatch(dataError(error)));
    },
    onAddedToBasket: id => dispatch(productAddedToBasket(id)),
  };
};

export default withDataStoreContext()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductListContainer)
);
