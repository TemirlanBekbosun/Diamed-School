import React from "react";
import { Box, Button } from "@mui/material";

export default function SubmitHomework({ onSubmit }) {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ px: 8, py: 1.5, fontWeight: 500 }}
        onClick={onSubmit}
      >
        Отправить
      </Button>
    </Box>
  );
}
