import React from 'react';
import { DataStoreConsumer } from '../dataStore-context/dataStoreContext.jsx';
const withDataStoreContext = () => ComponentWrapped => {
  return props => {
    return (
      <DataStoreConsumer>
        {dataStoreService => {
          return (
            <ComponentWrapped {...props} dataStoreService={dataStoreService} />
          );
        }}
      </DataStoreConsumer>
    );
  };
};

export default withDataStoreContext;
