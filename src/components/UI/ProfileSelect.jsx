import {
  FormControl,
  Select as MuiSelect,
  MenuItem,
  styled,
  Box,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown, Settings, Logout } from "@mui/icons-material";
import iconProfile from "../../assets/icons/UserAcountprofile.svg";

const StyledProfileContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 12,
  cursor: "pointer",
  padding: "8px 16px",
  borderRadius: 12,
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "#F8F7FC",
  },
}));

const StyledSelect = styled(FormControl)(({ theme }) => ({
  "& .MuiInputBase-root": {
    border: "none",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiSelect-select": {
    padding: 0,
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  "& .MuiSelect-icon": {
    display: "none",
  },
}));

const UserName = styled(Typography)({
  fontSize: 20,
  fontWeight: 700,
  color: "#22304A",
  lineHeight: 1.2,
});

const ChevronIcon = styled(KeyboardArrowDown)({
  color: "#22304A",
  fontSize: 24,
});

const AvatarContainer = styled(Box)({
  width: 40,
  height: 40,
  borderRadius: 8,
  border: "2px solid #E9E6F7",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F8F7FC",
});

const AvatarIcon = styled("img")({});

const StyledMenuItem = styled(MenuItem)({
  fontSize: 16,
  fontWeight: 600,
  color: "#22304A",
  padding: "12px 16px",
  borderRadius: 8,
  margin: "4px 8px",
  display: "flex",
  alignItems: "center",
  gap: 12,
  "&:hover": {
    backgroundColor: "#F0F4FF",
  },
  "&.Mui-selected": {
    backgroundColor: "#E9E6F7",
    color: "#4A7AFF",
  },
});

const MenuIcon = styled(Box)({
  width: 20,
  height: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ProfileSelect = ({
  userName = "Сыймык Санжаров",
  onSettings,
  onLogout,
  ...props
}) => {
  const menuItems = [
    {
      value: "settings",
      label: "Настройки",
      icon: <Settings sx={{ fontSize: 20, color: "#22304A" }} />,
      action: onSettings,
    },
    {
      value: "logout",
      label: "Выход",
      icon: <Logout sx={{ fontSize: 20, color: "#22304A" }} />,
      action: onLogout,
    },
  ];

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedItem = menuItems.find((item) => item.value === selectedValue);
    if (selectedItem && selectedItem.action) {
      selectedItem.action();
    }
  };

  return (
    <StyledSelect>
      <MuiSelect
        value=""
        onChange={handleChange}
        displayEmpty
        renderValue={() => (
          <StyledProfileContainer>
            <UserName>{userName}</UserName>

            <ChevronIcon />
            <AvatarContainer>
              <AvatarIcon src={iconProfile} />
            </AvatarContainer>
          </StyledProfileContainer>
        )}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: 12,
              marginTop: 1,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              border: "1px solid #E9E6F7",
              minWidth: 200,
            },
          },
        }}
        {...props}
      >
        {menuItems.map((item) => (
          <StyledMenuItem key={item.value} value={item.value}>
            <MenuIcon>{item.icon}</MenuIcon>
            {item.label}
          </StyledMenuItem>
        ))}
      </MuiSelect>
    </StyledSelect>
  );
};

export default ProfileSelect;
