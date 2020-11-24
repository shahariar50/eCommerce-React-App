import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Products from './components/Products';
import Registration from './components/Registration';
import Login from './components/Login';
import isAuthenticated from './utils/isAuthenticated';
import Cart from './components/Cart';
import ContextProvider from './store/context.provider';
import MyFooter from './components/common/Footer';
import * as Styled from './main.styled';

const Main: React.FC = () => {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Styled.MainContainer>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
        </Switch>
        </Styled.MainContainer>
        <MyFooter/>
      </Router>
    </ContextProvider>
  );
};
/* 
const PublicRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Redirect
            to={{
              pathname: '/registration',
              state: { from: props.location }
            }}
          />
        ) : (
            <Component {...props} />
          )
      }
    />
  );
};

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}; */

export default Main;
