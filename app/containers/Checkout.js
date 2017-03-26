import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {get} from 'lodash';

import {
  fetchUsers,
  changeBalance,
  fetchProducts,
  removeFromCart,
  changeNewStockId,
  changeNewStockSearch,
  changeNewStockQuantity,
  logOut,
} from '../actions/actions';
import {Checkout} from '../components/Checkout';

function mapStateToProps(state, props) {
  return {
    loggedIn: get(state, 'login.loggedIn', false),
    username: get(state, 'login.username', 'No user selected'),
    users: get(state, 'users.data', {}),
    cart: get(state, 'cart', {}),
    products: get(state, 'products.data', []),
    fetchingProducts: get(state, 'products.fetching', true),
    balance: get(state, `users.data[${get(state, 'login.username', '')}].balance`, 0),
    newStock: get(state, 'newStock', {}),
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchUsers,
      changeBalance,
      fetchProducts,
      removeFromCart,
      changeNewStockId,
      changeNewStockSearch,
      changeNewStockQuantity,
      logOut,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
