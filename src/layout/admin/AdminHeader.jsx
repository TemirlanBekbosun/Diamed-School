import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import diameSchoollogo from "../../assets/icons/DiameSchool.svg";
import { useNavigate, NavLink as RouterNavLink } from "react-router";
import ProfileSelect from "../../components/UI/ProfileSelect";

const AdminHeader = () => {
  const navigate = useNavigate();
  const handleNavigateToSignIn = () => navigate("/signup");
  return (
    <Headers>
      <img src={diameSchoollogo} alt="logo" />
      <ButtonBlock>
        <ProfileSelect />
      </ButtonBlock>
    </Headers>
  );
};

export default AdminHeader;

const Headers = styled("header")(() => ({
  backgroundColor: "#F2F7FB",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "13.5px 60px",
}));

const ButtonBlock = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "40px",
}));
