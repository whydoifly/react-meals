import { useContext } from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../context/cartContext';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const handleCartItemRemove = (id) => {
    cartCtx.removeItem(id);
  };

  const handleCartItemAdd = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id + Math.random()}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={handleCartItemRemove.bind(null, item.id)}
          onAdd={handleCartItemAdd.bind(null, item)}
          >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
