import { forwardRef, useState } from "react";
import {
  FormHelperText,
  InputAdornment,
  TextField,
  Typography,
  styled,
  IconButton,
} from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import Eye from "../../assets/icons/Eye.svg";
import EyeClosed from "../../assets/icons/EyeClosed.svg";
const Input = forwardRef(
  (
    {
      type = "text",
      placeholder,
      handleChange,
      value,
      labelText,
      name,
      error,
      errorText,
      inputProps,
      icon,
      ...rest
    },
    ref
  ) => (
    <InputContainer>
      {labelText && <InputLabelText error={error}>{labelText}</InputLabelText>}

      <StyledInput
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        error={Boolean(error)}
        name={name}
        ref={ref}
        fullWidth
        variant="outlined"
        InputProps={{
          startAdornment: icon ? (
            <InputAdornment position="start"></InputAdornment>
          ) : null,
          endAdornment: error ? (
            <InputAdornment position="end">
              <ErrorOutlineRoundedIcon className="error-icon" />
            </InputAdornment>
          ) : null,
          ...inputProps,
        }}
        {...rest}
      />

      {error && <StyledFormHelperText>{errorText}</StyledFormHelperText>}
    </InputContainer>
  )
);

Input.Password = forwardRef(
  ({ error, errorText, inputProps, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        ref={ref}
        inputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleVisibility} edge="end">
                {showPassword ? (
                  <img src={EyeClosed} alt="" />
                ) : (
                  <img src={Eye} alt="" />
                )}
              </IconButton>
            </InputAdornment>
          ),
          ...inputProps,
        }}
        error={error}
        errorText={errorText}
      />
    );
  }
);

export default Input;

const InputContainer = styled("div")({
  width: "100%",
});

const InputLabelText = styled(Typography)(({ error }) => ({
  color: error ? "red" : "#1D3452",
  marginBottom: "6px",
  fontWeight: 400,
  lineHeight: "100%",
   fontFamily: "Cygre-Regular",
  fontSize: "24px",
  fontStyle: "Regular",
}));

const StyledInput = styled(TextField)(({ error }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    backgroundColor: "white",

    "& fieldset": {
      border: "1px solid #3A86FF",
    },

    "&:hover fieldset": {
      border: "1px solid #3A86FF",
    },

    "&.Mui-focused fieldset": {
      border: "1px solid #3A86FF",
    },
  },

  "& .MuiOutlinedInput-input": {
    padding: "12px 14px",
  },

  "& .MuiOutlinedInput-root.Mui-error fieldset": {
    borderColor: "red",
  },
}));

const StyledFormHelperText = styled(FormHelperText)({
  color: "red",
  fontSize: "12px",
  textAlign: "left",
});
