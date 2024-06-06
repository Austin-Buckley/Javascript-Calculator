import "./App.css";

import React, { useRef } from "react";

import Box from "@mui/material/Box";
import Calculator from "./components/Calculator";
import { Typography } from "@mui/material";
import { useState } from "react";

const endsWithOperator = /[x+-/]$/;
function App() {
  const [formulaDisplay, setFormulaDisplay] = React.useState("");
  const [currentValue, setCurrentValue] = useState("0");

  const formulaRef = useRef(formulaDisplay);
  const valueRef = useRef(currentValue);

  const updateFormula = (val) => {
    if (val === "." && valueRef.current.includes(".")) {
      return;
    }

    if (valueRef.current === "0") {
      valueRef.current = "";
      formulaRef.current = "";
    }

    if (
      valueRef.current.includes("/") ||
      val === "/" ||
      valueRef.current.includes("*") ||
      val === "*" ||
      valueRef.current.includes("-") ||
      val === "-" ||
      valueRef.current.includes("+") ||
      val === "+"
    ) {
      valueRef.current = "";
    }

    formulaRef.current += val;
    valueRef.current += val;
    setFormulaDisplay(formulaRef.current);
  };

  const handleEvaluate = () => {
    if (!valueRef.current.includes("Limit")) {
      let expression = formulaRef.current;
      while (endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }
      expression = expression.replace(/x/g, "*").replace(/--/g, "+");

      try {
        const result = eval(expression);
        valueRef.current = result.toString();
        formulaRef.current = expression.replace(/\*/g, "⋅") + "=" + result;
        setCurrentValue(valueRef.current);
        setFormulaDisplay(formulaRef.current);
      } catch (error) {
        setCurrentValue("Error");
        setFormulaDisplay("Error");
      }
    }
  };

  const clearDisplay = () => {
    formulaRef.current = "";
    valueRef.current = "0";
    setCurrentValue("0");
    setFormulaDisplay("");
  };

  return (
    <div className="App">
      <Box className="calculatorFrame">
        <div className="formulaScreen numbers">{formulaRef.current}</div>
        <div className="outputScreen numbers" id="display">
          {valueRef.current}
        </div>
        <Calculator
          updateFormula={updateFormula}
          clearDisplay={clearDisplay}
          executeFormula={handleEvaluate}
        />

      </Box>
    </div>
  );
}

export default App;
