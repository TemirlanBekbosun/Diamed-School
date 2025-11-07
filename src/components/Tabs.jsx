import React from "react";
import { Tabs as MuiTabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTabs = styled(MuiTabs)(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.divider}`,
  width: "100%",
  "& .MuiTabs-flexContainer": {
    gap: theme.spacing(2),
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 500,
  fontSize: 16,
  color: theme.palette.text.primary,
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
}));

export default function Tabs({ value, onChange }) {
  return (
    <StyledTabs value={value} onChange={(e, val) => onChange(val)}>
      <StyledTab label="Урок" />
      <StyledTab label="Домашнее задание" />
    </StyledTabs>
  );
}
