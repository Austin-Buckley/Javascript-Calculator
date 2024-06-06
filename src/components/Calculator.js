import Box from "@mui/material/Box";
import CalculatorButton from "./CalculatorButton";
import Grid from "@mui/material/Grid";
import SwapVariantButton from "./SwapVariantButton";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import getCalculatorButtonData from "./CalculatorButtonData.js";
import { theme } from "./Theme.js";
import { useState } from "react";

export default function Calculator({
  updateFormula,
  clearDisplay,
  executeFormula,
}) {
  const [btnVariant, setVariant] = useState("contained");

  const switchVariant = () => {
    setVariant((prev) => (prev === "contained" ? "outlined" : "contained"));
  };

  const calculatorButtonData = getCalculatorButtonData(
    btnVariant,
    updateFormula,
    clearDisplay,
    executeFormula
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 0.5, md: 0.5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <ThemeProvider theme={theme}>
          {calculatorButtonData.map((button) => (
            <CalculatorButton
              key={button.settings.buttonProps.id}
              settings={button.settings}
            />
          ))}
            <Typography variant="inherit" className="title">
              designed and coded by{" "}
              <a
                rel="github noreferrer"
                href="https://github.com/Austin-Buckley"
                target="_blank"
                className="github"
              >
                austin buckley
              </a>
            </Typography>
          <SwapVariantButton variant={btnVariant} switchVariant={switchVariant}>
            {" "}
          </SwapVariantButton>
        </ThemeProvider>
      </Grid>
    </Box>
  );
}
