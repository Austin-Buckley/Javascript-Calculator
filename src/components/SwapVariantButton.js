import IconButton from "@mui/material/IconButton";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";

export default function SwapVariantButton({ variant, switchVariant }) {
  return (
    <IconButton
      onClick={switchVariant}
      sx={{
        fontFamily: "digital",
      }}
      variant={variant === "contained" ? "outlined" : "contained"}
      color="info"
    >
      {variant === "contained" ? (
        <SwapHorizontalCircleOutlinedIcon />
      ) : (
        <SwapHorizontalCircleIcon />
      )}
    </IconButton>
  );
}