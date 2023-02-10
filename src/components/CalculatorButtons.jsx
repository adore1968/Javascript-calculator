import React from "react";
import { useDispatch } from "react-redux";
import {
  clearValue,
  addOperators,
  addDecimal,
  addResult,
  addNumbers,
} from "../features/calculator/calculatorSlice";

function CalculatorButtons() {
  const dispatch = useDispatch();

  const buttons = [
    {
      id: "clear",
      content: "AC",
    },
    {
      id: "zero",
      content: "0",
    },
    {
      id: "decimal",
      content: ".",
    },
    {
      id: "one",
      content: "1",
    },
    {
      id: "two",
      content: "2",
    },
    {
      id: "three",
      content: "3",
    },
    {
      id: "four",
      content: "4",
    },
    {
      id: "five",
      content: "5",
    },
    {
      id: "six",
      content: "6",
    },
    {
      id: "seven",
      content: "7",
    },
    {
      id: "eight",
      content: "8",
    },
    {
      id: "nine",
      content: "9",
    },
    {
      id: "divide",
      content: "/",
    },
    {
      id: "multiply",
      content: "*",
    },
    {
      id: "subtract",
      content: "-",
    },
    {
      id: "add",
      content: "+",
    },
    {
      id: "equals",
      content: "=",
    },
  ];

  const handleClick = (button) => {
    if (button === "AC") {
      dispatch(clearValue());
    } else if (
      button === "+" ||
      button === "-" ||
      button === "*" ||
      button === "/"
    ) {
      dispatch(addOperators(button));
    } else if (button === ".") {
      dispatch(addDecimal(button));
    } else if (button === "=") {
      dispatch(addResult());
    } else {
      dispatch(addNumbers(button));
    }
  };

  return (
    <div className="d-flex flex-wrap align-items-stretch">
      {buttons.map((button, index) => {
        return (
          <button
            key={index}
            id={button.id}
            onClick={() => handleClick(button.content)}
            className="flex-fill btn btn-primary m-1 fs-4 button"
          >
            {button.content}
          </button>
        );
      })}
    </div>
  );
}

export default CalculatorButtons;
