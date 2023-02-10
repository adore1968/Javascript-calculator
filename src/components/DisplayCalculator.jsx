import React from "react";
import { useSelector } from "react-redux";

function DisplayCalculator() {
  const value = useSelector((store) => store.calculatorSlice.value);
  return (
    <div className="bg-black text-white">
      <p className="text-end fs-2">{value}</p>
    </div>
  );
}

export default DisplayCalculator;
