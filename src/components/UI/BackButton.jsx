import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "../../assets/icons/Stroke.svg";

const StyledBackButton = styled(IconButton)(() => {
  return {
    width: 94,
    height: 94,
    background: "#F5F2F9",
    borderRadius: "50%",
    color: "#ffffff",
    boxShadow: "-3px 3px 0px #3A86FF",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    border: "1px #FF8FA3 solid",
  };
});

const BackButton = ({
  onClick,
  size = "medium",
  disabled = false,
  ariaLabel = "Назад",
  className,
  ...props
}) => {
  return (
    <StyledBackButton
      onClick={onClick}
      size={size}
      disabled={disabled}
      aria-label={ariaLabel}
      className={className}
      {...props}
    >
      <img src={ArrowBackIcon} alt="arrow back" />
    </StyledBackButton>
  );
};

export default BackButton;
