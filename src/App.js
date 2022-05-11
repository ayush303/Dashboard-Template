import React from 'react';
import {
  TopBar,
  SideBar,
} from './components';
import {
  Home,
  UserList,
  User,
  NewUser,
  Product,
  ProductList,
  NewProduct,
} from './pages';
import './app.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/user/:userId">
            <User />
          </Route>
          <Route exact path="/newUser">
            <NewUser />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/product/:productId">
            <Product />
          </Route>
          <Route exact path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
