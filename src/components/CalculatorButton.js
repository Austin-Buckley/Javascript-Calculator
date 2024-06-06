import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function CalculatorButton({ settings }) {
  const {
    id = "",
    color = "num",
    value = 0,
    fontSize = "1.5rem",
    variant = "contained",
  } = settings.buttonProps;
  const { xs = 0, sm = 0, md = 0 } = settings.spacing;

  return (
    <Grid item xs={xs} sm={sm} md={md}>
      <Button
        sx={{
          height: "50px",
          fontFamily: "digital",
          fontSize: { fontSize },
        }}
        className={variant === "contained" ? "btn contained" : "btn"}
        id={id}
        variant={variant}
        color={color}
        onClick={() => settings.callback(value)}
      >
        {value}
      </Button>
    </Grid>
  );
}
