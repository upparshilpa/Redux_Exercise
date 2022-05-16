import React from "react";

import { createBuyMilkAction } from "./MilkAction";

import { connect } from "react-redux";

import { useState } from "react";

function MilkContainer(props) {
  const [quantityNumber, setQuantityNumber] = useState();

  const [error, setError] = useState("");

  if (props.availableMilkQuantity === 0) {
    // alert("You Have Buyed All The Milk Products");

    document.getElementById("buy_btn").disabled = true;
  }

  console.log(props.availableMilkQuantity);

  return (
    <div>
      <h1>Milk Container : {props.availableMilkQuantity}</h1>

      <input
        className="inputValue"
        type={"number"}
        value={quantityNumber}
        placeholder="0"
        onChange={(e) => setQuantityNumber(e.target.value)}
      />

      <button
        id="buy_btn"
        onClick={() =>
          props.buyMilk(
            quantityNumber,

            props.availableMilkQuantity,

            setError,

            setQuantityNumber
          )
        }
      >
        BUY MILK
      </button>
      <p
        className={
          props.availableMilkQuantity == 0 ||
          quantityNumber < props.availableMilkQuantity
            ? "done"
            : "error"
        }
      >
        {error}
      </p>

      <p>
        {props.availableMilkQuantity == 0 && (
          <p className="done">You buyed all milk products.</p>
        )}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    availableMilkQuantity: state.numOfMilk,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyMilk: (quantity, availableMilkQuantity, setError, setQuantityNumber) => {
      if (quantity < 0) {
        // alert("Invalid Input");

        setError("You cannot buy this Milk!");
      } else {
        if (quantity > availableMilkQuantity) {
          setError("You have Exceeded the limit!");
        } else {
          dispatch(createBuyMilkAction(quantity));

          setError("Successfully purchased milk");

          setQuantityNumber(0);
        }
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MilkContainer);
