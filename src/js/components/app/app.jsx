import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header/header.jsx';
import MainPage from '../pages/main-page/mainPage.jsx';
import CardPage from '../pages/cardPage.jsx';
import BasketPage from '../pages/basket-page/basketPage.jsx';
import Footer from '../footer/footer.jsx';

const App = () => {
  return (
    <div>
      <Header numItems={2} />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/cart" component={CardPage} />
        <Route path="/basket" component={BasketPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
