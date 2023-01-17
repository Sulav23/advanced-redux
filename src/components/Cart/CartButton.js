import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/features/modalSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleToggle = () => {
    dispatch(modalActions.toggle());
  };

  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
