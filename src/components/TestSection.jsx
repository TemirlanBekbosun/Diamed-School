import { useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TestCard } from "./TestCard";
import FileIcon from "../assets/icons/File.svg";
import CheckboxFile from "../assets/icons/CheckboxFile.svg";

const testTitles = [
  "Цитология",
  "Ботаника",
  "Зоология",
  "Анатомия",
  "Общая биология",
];

export const TestSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <SectionWrapper onClick={() => setOpen(!open)} open={open}>
      <HeaderBox open={open}>
        <TitleWithIcon>
          <IconBox>
            <img src={FileIcon} alt="file" />
          </IconBox>
          <TitleText onClick={() => setOpen(!open)}>
            Работа над тестами по биологии
          </TitleText>
        </TitleWithIcon>
        <StyledImg src={CheckboxFile} alt="file" />
        <ExpandButton onClick={() => setOpen(!open)} open={open}>
          <ExpandMoreIcon />
        </ExpandButton>
      </HeaderBox>

      <Collapse in={open} timeout={600}>
        <CollapseBox>
          <CardsContainer direction="row" spacing={2}>
            {testTitles.map((title, i) => (
              <TestCard key={i} title={title} />
            ))}
          </CardsContainer>
        </CollapseBox>
      </Collapse>
    </SectionWrapper>
  );
};

const SectionWrapper = styled(Box)(({ theme }) => ({

  marginTop: theme.spacing(7),
  backgroundColor: "#f8fbff",
  borderRadius: 16,
  border: "1px solid #3A86FF",
  width: "90%",
  padding: theme.spacing(3),
  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
  overflow: "hidden",
  cursor: "pointer",
  marginLeft: "80px",
}));

const HeaderBox = styled(Box)(({ open }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: open ? 24 : 0,
}));
const StyledImg = styled("img")(({}) => ({
  marginLeft: "690px",
}));

const TitleWithIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 16,
  cursor: "pointer",
});

const IconBox = styled(Box)({
  width: 125,
  height: 80,
  backgroundColor: "#3A86FF",
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  "& img": {
    width: 32,
    height: 32,
  },
});

const TitleText = styled(Typography)({
  fontSize: "24px",
  fontWeight: 700,
  color: "#1a1a1a",
  cursor: "pointer",
 
});

const ExpandButton = styled(IconButton)(({ open }) => ({
  color: "#1976d2",
  transform: open ? "rotate(180deg)" : "rotate(0deg)",
  transition: "all 0.3s ease",
}));

const CollapseBox = styled(Box)({
  backgroundColor: "#3A86FF",
  borderRadius: 16,
  padding: 24,
  boxShadow: "0 6px 20px rgba(25,118,210,0.25)",
  marginTop: 16,
});

const CardsContainer = styled(Stack)({
  flexWrap: "wrap",
  gap: 19,
  justifyContent: "center",
});
