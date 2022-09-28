import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
import {useRef, useState} from "react";

function MealItemForm(props) {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length > 0 && enteredAmountNumber > 0 && enteredAmountNumber < 6) {
      props.onAddToCart(enteredAmountNumber);
    } else {
      setAmountIsValid(false);
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input label="Amount"
             ref={amountInputRef}
             input={{
               id: "amount_" + props.id,
               type: "number",
               min: "1",
               max: "5",
               step: "1",
               defaultValue: "1"
             }}/>
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}

export default MealItemForm;