import React from "react";
import WishStore from "../../store/wishStore";

const WishSubmitButton = (props) => {
  let { isWistSubmit } = WishStore();
  if (isWistSubmit === false) {
    return (
      <button onClick={props.onClick} type="submit" className={props.className}>
        {props.text}
      </button>
    );
  } else {
    return (
      <button disabled={false} className={props.className}>
        <div className="spinner-border spinner-border-sm" role="status"></div>
        Processing...
      </button>
    );
  }
};

export default WishSubmitButton;
