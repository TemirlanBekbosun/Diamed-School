import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "../../assets/icons/Stroke.svg";

const StyledBackButton = styled(IconButton)(() => {
  return {
    width: 52,
    height: 52,
    background: "#F5F2F9",
    borderRadius: "50%",
    color: "#ffffff",
    boxShadow: "-3px 3px 0px #3A86FF",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    border: "1px #FF8FA3 solid",
    ":hover": {
    transform: "translateY(-5px)",
    boxShadow: "-3 8px 20px #3A86FF",
    transition: "all 0.6s ",
  },
  "&:active": {
    transform: "translateY(5px)",
    boxShadow: "0 2px 5px #3A86FF",
  },
  };
});

const BackButton = ({
  onClick,
  size = "medium",
  disabled = false,
  ariaLabel = "Назад",
  className,
  direction = "left",
  ...props
}) => {
  const imgStyle = {
    width: `18.96px`,
    display:" block",
    transform: direction === "right" ? "scaleX(-1)" : "none",
  };

  const alt = direction === "right" ? "arrow right" : "arrow back";

  return (
    <StyledBackButton
      onClick={onClick}
      size={size}
      disabled={disabled}
      aria-label={ariaLabel}
      className={className}
      {...props}
    >
      <img src={ArrowBackIcon} alt={alt} style={imgStyle} />
    </StyledBackButton>
  );
};

export default BackButton;