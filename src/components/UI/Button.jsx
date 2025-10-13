import { Button as MuiButton, styled } from "@mui/material";
import { forwardRef } from "react";
import Setting from "../../assets/icons/Setting.svg";

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
      {variant === "contained" && (
        <IconWrapper>
          <img src={Setting} alt="settings" />
        </IconWrapper>
      )}
    </StyledButton>
  )
);

export default Button;

const IconWrapper = styled("span")({
  position: "absolute",
  right: "20px",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
  height: "20px",
});

const StyledButton = styled(MuiButton)(({ variant }) => {
  const buttonStyles = {
    "&.MuiButton-root": {
      borderRadius: "8px",
      padding: "10px 150px 10px 20px",
      position: "relative",
      textTransform: "none",
      fontWeight: 500,
      fontSize: "16px",
    },
  };

  if (variant === "contained") {
    buttonStyles["&.MuiButton-root"] = {
      ...buttonStyles["&.MuiButton-root"],

      backgroundColor: "white",
      color: "#1D3452",

      "&:hover": {
        backgroundColor: "#F5F2F9",
        transition: "all 0.6s",
        border: "1px solid #3A86FF",
      },

      "&:active": {
        color: "white",
        backgroundColor: "#3A86FF",
        border: "1px solid #FF8FA3",
      },

      "&.Mui-disabled": {
        backgroundColor: "#BDBDBD",
        color: "white",
      },
    };
  } else if (variant === "warning") {
    buttonStyles["&.MuiButton-root"] = {
      ...buttonStyles["&.MuiButton-root"],

      backgroundColor: "white",
      color: "#1D3452",

      "&:hover": {
        backgroundColor: "#F5F2F9",
        transition: "all 0.3s",
        border: "1px solid #3A86FF",
      },

      "&:active": {
        color: "white",
        backgroundColor: "#3A86FF",
        border: "1px solid #FF8FA3",
      },

      "&.Mui-disabled": {
        backgroundColor: "#BDBDBD",
        color: "white",
      },
    };
  } else if (variant === "outlined") {
    buttonStyles["&.MuiButton-root"] = {
      ...buttonStyles["&.MuiButton-root"],

      backgroundColor: "#8639B5",
      color: "white",

      "&:hover": {
        backgroundColor: "#5E35B1",
      },

      "&:active": {
        backgroundColor: "#7e4cd4",
      },

      "&.Mui-disabled": {
        backgroundColor: "#1C1B1F1F",
        color: "white",
        border: "none",
      },
    };
  }

  return buttonStyles;
});
