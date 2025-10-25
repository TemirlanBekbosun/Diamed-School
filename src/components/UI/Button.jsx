import { Button as MuiButton, styled } from "@mui/material";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      children,
      onClick,
      variant = "contained",
      disabled,
      type = "submit",
      ...rest
    },
    ref
  ) => (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled}
      variant={variant}
      ref={ref}
      {...rest}
    >
      {children}
    </StyledButton>
  )
);

export default Button;

const normalizeSize = (val) => {
  if (val == null) return undefined;
  return typeof val === "number" ? `${val}px` : val;
};

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "width" && prop !== "height",
})(({ variant, width, height }) => {
  const w = normalizeSize(width);
  const h = normalizeSize(height);

  const base = {
    borderRadius: "16px",
    padding: "30px 50px",
    position: "relative",
    textTransform: "none",
    fontWeight: 700,
    fontStyle: "regular",
    fontSize: "24px",
    fontFamily: "Roboto",
    cursor: "pointer",

    ...(w !== undefined ? { width: w } : {}),
    ...(h !== undefined ? { height: h } : {}),
  };

  const buttonStyles = {
    "&.MuiButton-root": {
      ...base,
    },
  };

  if (variant === "contained") {
    buttonStyles["&.MuiButton-root"] = {
      ...buttonStyles["&.MuiButton-root"],
      backgroundColor: "white",
      color: "#1D3452",
      border: "1.5px solid #FF8FA3",
      boxShadow: "3px 2px 0px #3A86FF",
      color: "#3A86FF",
      "&:hover": {
        backgroundColor: "#F5F2F9",
        transition: "all 0.6s",
      },
      "&:active": {
        color: "white",
        border: "1.5px solid #3A86FF",
        backgroundColor: "#3A86FF",
        boxShadow: "3px 3px 0px #f8b5c3",
      },
      "&.Mui-disabled": {
        backgroundColor: "#BDBDBD",
        color: "white",
      },
    };
  } else if (variant === "outlined") {
    buttonStyles["&.MuiButton-root"] = {
      ...buttonStyles["&.MuiButton-root"],
      color: "white",
      border: "1.5px solid #3A86FF",
      backgroundColor: "#3A86FF",
      boxShadow: "3px 3px 0px #f8b5c3",
      "&:hover": {
        backgroundColor: "#2771e9",
        transition: "all 0.6s",
      },
      "&:active": {
        backgroundColor: "white",
        color: "#1D3452",
        border: "1.5px solid #FF8FA3",
        boxShadow: "3px 2px 0px #3A86FF",
        color: "#3A86FF",
      },
      "&.Mui-disabled": {
        backgroundColor: "#BDBDBD",
        color: "white",
      },
    };
  } else if (variant === "fourth") {
    const defaultFourth = { width: "232px", height: "77px" };
    buttonStyles["&.MuiButton-root"] = {
      ...buttonStyles["&.MuiButton-root"],
      backgroundColor: "white",
      color: "#3A86FF",
      border: "1.5px solid #FF8FA3",
      color: "#3A86FF",
      width: w !== undefined ? w : defaultFourth.width,
      height: h !== undefined ? h : defaultFourth.height,
      borderRadius: "16px",
      fontWeight: 700,
      fontStyle: "regular",
      fontSize: "24px",
      fontFamily: "Roboto",
      cursor: "pointer",

      "&:hover": {
        backgroundColor: "#F5F2F9",
        transition: "all 0.6s",
      },
      "&:active": {
        color: "white",
        boxShadow: "3px 3px 0px #f8b5c3",
      },
      "&.Mui-disabled": {
        backgroundColor: "#BDBDBD",
        color: "white",
      },
    };
  }

  return buttonStyles;
});
