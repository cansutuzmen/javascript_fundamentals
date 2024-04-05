// shopping
const user = {
  name: 'Cansu',
  active: true,
  cart: [],
  purchases: [],
};
const history = [];
const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, { name: 'laptop', price: 200 });

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  history.push(user);
  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItems(user) {
  history.push(user);
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  history.push(user);
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  history.push(user);
  return Object.assign({}, user, { cart: [] });
}

/*
   Implement a cart feature:
     1. Add items to cart.
     2. Add 30% tax to item in cart.
     3. Buy item: cart --> purchases.
     4. Empty cart

   Bonus:
     Accept refunds.
     Track user history.
  */
