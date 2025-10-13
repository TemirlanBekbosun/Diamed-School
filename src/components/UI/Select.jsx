import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  styled,
} from "@mui/material";

const StyledSelect = styled(FormControl)(({ theme }) => ({
  background: "#F8F7FC",
  borderRadius: 20,
  padding: "16px 24px 8px 24px",
  boxShadow: "0px 2px 8px 0px #E9E6F7",
  minWidth: 260,
  border: "none",
  "& .MuiInputLabel-root": {
    color: "#A3A3C2",
    fontSize: 16,
    fontWeight: 400,
    left: 24,
    top: 12,
    "&.Mui-focused": {
      color: "#4A7AFF",
    },
  },
  "& .MuiInputBase-root": {
    background: "transparent",
    borderRadius: 16,
    fontSize: 28,
    fontWeight: 600,
    color: "#22304A",
    padding: "0 0 0 0",
    "& fieldset": {
      border: "none",
    },
  },
  "& .MuiSelect-icon": {
    color: "#4A7AFF",
    fontSize: 28,
    right: 16,
  },
  "& .MuiMenuItem-root": {
    fontSize: 24,
    fontWeight: 400,
    color: "#22304A",
    borderRadius: 12,
    margin: "4px 8px",
    "&:hover": {
      background: "#F0F4FF",
    },
    "&.Mui-selected": {
      background: "#E9E6F7",
      color: "#4A7AFF",
    },
  },
}));

const Select = ({
  label,
  value,
  onChange,
  options = [],
  name,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledSelect fullWidth={fullWidth} variant="outlined">
      {label && <InputLabel shrink>{label}</InputLabel>}
      <MuiSelect
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        displayEmpty
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </StyledSelect>
  );
};

export default Select;
