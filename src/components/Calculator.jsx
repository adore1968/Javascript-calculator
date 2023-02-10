import React from "react";
import CalculatorButtons from "./CalculatorButtons";
import DisplayCalculator from "./DisplayCalculator";

function Calculator() {
  return (
    <div className="bg-black p-3 rounded calculator">
      <DisplayCalculator />
      <CalculatorButtons />
    </div>
  );
}

export default Calculator;
