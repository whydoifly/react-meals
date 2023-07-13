import CartContext from './cartContext';

const cartProvider = (props) => {
  const handleItemToCart = (item) => {};

  const handleRemoveItemFromCart = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,

    addItem: handleItemToCart,
    removeItem: handleRemoveItemFromCart,
  };
  return (
    <CartContext.Provider value={CartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default cartProvider;
