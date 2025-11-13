import {
  Checkbox as MuiCheckbox,
  FormControlLabel,
  styled,
} from "@mui/material";
import { forwardRef } from "react";
import borderCheck from "../../assets/icons/border-check.svg";
import colorCheck from "../../assets/images/checkbox.png";

const Checkbox = forwardRef(
  ({ checked, onChange, disabled, label, ...rest }, ref) => (
    <StyledFormControlLabel
      label={label}
      control={
        <StyledMuiCheckbox
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          ref={ref}
          icon={
            <img src={borderCheck} alt="unchecked" width="20" height="20" />
          }
          checkedIcon={
            <img src={colorCheck} alt="checked" width="20" height="20" />
          }
          {...rest}
        />
      }
    />
  )
);
export default Checkbox;

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  "&.MuiButtonBase-root-MuiCheckbox-root ": {
    color: "#1744b8 !important",
    border: "#1744b8  solid 1px",
  },
}));

const StyledMuiCheckbox = styled(MuiCheckbox)(() => ({
  "&.MuiTouchRipple-root ": {
    "& svg:hover": {
      color: "#3A86FF !important",
    },
  },

  "&.Mui-checked": {
    "& svg": {
      color: "#3A86FF !important",
    },

    "& span": {
      color: "#8639B5 !important",
    },
  },
}));
