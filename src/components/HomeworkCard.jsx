import React, { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function HomeworkCard({ description, comment, isSubmitted }) {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
      <Typography variant="body1">{description}</Typography>
      <Typography variant="body2" color="text.secondary" mt={1}>
        {comment}
      </Typography>

      {/* Файл тандоо */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={openFileDialog}
      >
        Файл тандоо
      </Button>

      {/* Тандалган файлды көрсөтүү */}
      {selectedFile && (
        <Typography mt={2} fontWeight={600}>
          Тандалган файл: {selectedFile.name}
        </Typography>
      )}
    </Box>
  );
}
