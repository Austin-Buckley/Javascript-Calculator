const numSpacing = { xs: 1, sm: 2, md: 3 };
const clearSpacing = { xs: 2, sm: 4, md: 6 };
const zeroSpacing = { xs: 2.5, sm: 5, md: 7.5 };
const decimalSpacing = { xs: 1.5, sm: 3, md: 4.5 };

const getCalculatorButtonData = (
  btnVariant,
  updateFormula,
  clearDisplay,
  executeFormula
) => [
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "AC",
        color: "clear",
        id: "clear",
      },
      spacing: clearSpacing,
      callback: clearDisplay,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "/",
        color: "op",
        id: "divide",
      },
      spacing: numSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "*",
        color: "op",
        id: "multiply",
      },
      spacing: numSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "7",
        color: "num",
        id: "seven",
      },
      spacing: numSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "8",
        color: "num",
        id: "eight",
      },
      spacing: numSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "9",
        color: "num",
        id: "nine",
      },
      spacing: numSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "-",
        color: "op",
        id: "subtract",
      },
      spacing: numSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "4",
        color: "num",
        id: "four",
      },
      spacing: numSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "5",
        color: "num",
        id: "five",
      },
      spacing: numSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "6",
        color: "num",
        id: "six",
      },
      spacing: numSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "+",
        color: "op",
        id: "add",
      },
      spacing: numSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "1",
        color: "num",
        id: "one",
      },
      spacing: numSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "2",
        color: "num",
        id: "two",
      },
      spacing: numSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "3",
        color: "num",
        id: "three",
      },
      spacing: numSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "=",
        color: "op",
        id: "equals",
      },
      spacing: numSpacing,
      callback: executeFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: "0",
        color: "num",
        id: "zero",
      },
      spacing: zeroSpacing,
      callback: updateFormula,
    },
  },
  {
    settings: {
      buttonProps: {
        variant: btnVariant,
        value: ".",
        color: "op",
        id: "decimal",
      },
      spacing: decimalSpacing,
      callback: updateFormula,
    },
  },
];

export default getCalculatorButtonData;
