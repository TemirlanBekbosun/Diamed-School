import { Box, Link, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Breadcrumb = () => (
  <Box sx={{ paddingLeft: 8 }}>
    <Box
      sx={{
        fontSize: "0.95rem",
        color: "#666",
      }}
    >
      <Link href="/" underline="hover" sx={{ color: "#666", fontWeight: 500 }}>
        курсы
      </Link>
      <Typography component="span" sx={{ mx: 0.5 }}>
        /
      </Typography>
      <Typography component="span" sx={{ fontWeight: 600 }}>
        биология
      </Typography>
    </Box>

    <Link
      href="/"
      underline="none"
      sx={{
        mt: 2,
        display: "flex",
        alignItems: "center",
        fontWeight: 600,
        fontSize: "1rem",
        color: "black", 
        "&:hover": { color: "#333" },
      }}
    >
      <ArrowBackIcon
        fontSize="small"
        sx={{ mr: 0.5, color: "#1976d2" }} 
      />
      Назад
    </Link>
  </Box>
);
