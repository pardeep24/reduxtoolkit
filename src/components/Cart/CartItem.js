import classes from "./CartItem.module.css";
import { cartAction } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, quantity, total, price } = props.item;

  const addItemToCartHandler = () => {
    dispatch(cartAction.addItemToCart({ id, title, price }));
  };
  const removeItemToCartHandler = () => {
    dispatch(cartAction.removeItemToCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemToCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
