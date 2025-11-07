import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Paperclip } from "lucide-react";

const RedCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.error.light + "20",
  border: `1px solid ${theme.palette.error.light}`,
  borderRadius: 12,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[1],
}));

const WhiteCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: 12,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[1],
}));

export default function HomeworkCard({ description, comment, isSubmitted, onFileAttach }) {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <RedCard>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6">Домашнее задание</Typography>
          {isSubmitted && (
            <Typography variant="body2" color="primary" textAlign="right">
              <strong>Дата отправки 26.08.25</strong>
              <br />17:26
            </Typography>
          )}
        </Box>
        <Typography variant="body1" color="text.primary">
          {description}
        </Typography>
      </RedCard>

      {isSubmitted && comment && (
        <WhiteCard>
          <Typography variant="body1" color="text.primary" mb={2}>
            {description}
          </Typography>
          <Box mb={2}>
            <Typography variant="subtitle1" fontWeight={600} mb={1}>
              Комментарии ученика
            </Typography>
            <Typography variant="body2" color="text.primary">
              {comment}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Button
              variant="outlined"
              startIcon={<Paperclip size={18} />}
              onClick={onFileAttach}
            >
              Прикрепить файл
            </Button>
            <Typography variant="body2" color="primary">
              Нет файла
            </Typography>
          </Box>
        </WhiteCard>
      )}
    </Box>
  );
}
