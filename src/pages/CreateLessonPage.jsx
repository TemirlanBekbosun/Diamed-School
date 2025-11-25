import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  styled,
  IconButton,
  TextField,
  Link,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "dayjs/locale/ru";
import UserHeaders from "../layout/user/userHeaders";

const HeaderSection = styled(Box)`
  padding: 10px 0 32px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const BackWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 9px;
  &:hover {
    opacity: 0.85;
  }
`;

const BackIcon = styled(ArrowBackIosNewIcon)`
  font-size: 1.2rem;
  color: #1976d2;
`;

const BackText = styled(Typography)`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1f2937;
`;

const BreadcrumbPath = styled(Typography)`
  color: #5c6f92;
  font-size: 1rem;
  font-weight: 500;
`;

const DeadlineButtonWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 30px;
  margin-left: 1100px;
`;

const DeadlineButton = styled(Button)`
  border: 2px solid #3a82f7;
  color: #3a82f7;
  border-radius: 30px;
  padding: 10px 32px;
  text-transform: none;
  font-weight: 600;
  font-size: 1rem;
  background-color: transparent;
  &:hover {
    background-color: #ebf2ff;
    border-color: #2563eb;
  }
`;

const FileUploadBig = styled(Paper)`
  border: 2px solid #ffb4b4;
  background-color: #fff5f5;
  border-radius: 20px;
  padding: 32px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #ffebeb;
    border-color: #ff8c8c;
  }
`;

const FileUploadText = styled(Typography)`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
`;

const PageWrapper = styled(Box)`
  background-color: #f2f7fd;
  min-height: 100vh;
  padding: 0 80px 40px 60px;
`;

const VideoSection = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const VideoPreview = styled(Box)`
  background-color: #d9d9d9;
  border-radius: 15px;
  width: 480px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const PlayIcon = styled(PlayArrowIcon)`
  font-size: 90px;
  color: #3a82f7;
`;

const TextBlock = styled(Box)`
  flex: 1;
`;

const Title = styled(Typography)`
  font-size: 28px;
  color: #3a82f7;
  font-weight: 600;
`;
const SubTitle = styled(Typography)`
  font-size: 24px;
  color: #3a82f7;
  font-weight: 600;
  margin-top: 35px;
`;

const InvisibleInput = styled(TextField)({
  marginTop: "12px",
  "& .MuiInputBase-root": {
    fontSize: "16px",
    color: "#1f2937",
    backgroundColor: "transparent",
    padding: "8px 0",
    lineHeight: "1.6",
  },
  "& .MuiOutlinedInput-notchedOutline": { border: "none !important" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { border: "none" },
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": { border: "none" },
  },
  "& .MuiInputBase-input": {
    padding: 0,
    "&::placeholder": { color: "#94a3b8", opacity: 1 },
  },
});

const AttachedFileBox = styled(Box)`
  margin-top: 16px;
  padding: 12px 16px;
  background-color: #fff;
  border: 1px solid #ffb4b4;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FileName = styled(Typography)`
  color: #1f2937;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PublishButton = styled(Button)`
  background-color: #3a82f7;
  color: #fff;
  border-radius: 10px;
  padding: 12px 45px;
  text-transform: none;
  box-shadow: 3px 5px 0px #ffb4b4;
  font-weight: 500;
  margin-top: 40px;
  &:hover {
    background-color: #2563eb;
  }
`;

const DeadlineBox = styled(Box)`
  margin-top: 20px;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 12px;
  border: 2px solid #3a82f7;
`;

const ConfirmDeadlineButton = styled(Button)`
  background-color: #3a82f7;
  color: white;
  margin-top: 16px;
  &:hover {
    background-color: #2563eb;
  }
  &:disabled {
    background-color: #94a3b8;
  }
`;

const SelectedDeadline = styled(Typography)`
  color: #3a82f7;
  font-weight: 600;
  font-size: 18px;
  margin-top: 20px;
`;

const ChangeButton = styled(Button)`
  color: #3a82f7;
  text-transform: none;
  padding: 0;
  font-size: 14px;
  &:hover {
    background: transparent;
    text-decoration: underline;
  }
`;

export default function CreateLessonPage() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [tempDeadline, setTempDeadline] = useState(null);
  const [finalDeadline, setFinalDeadline] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [lessonTitle, setLessonTitle] = useState("");
  const [homeworkText, setHomeworkText] = useState("");
  const [attachedFile, setAttachedFile] = useState(null);

  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const openFilePicker = () => fileInputRef.current?.click();
  const openVideoPicker = () => videoInputRef.current?.click();

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) setAttachedFile(file);
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setVideoSrc(URL.createObjectURL(file));
  };

  const removeFile = () => {
    setAttachedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleConfirmDeadline = () => {
    if (tempDeadline) {
      setFinalDeadline(tempDeadline);
      setShowPicker(false);
    }
  };

  const formatDate = (date) => (date ? date.format("D MMMM YYYY, HH:mm") : "");

  return (
    <>
      <UserHeaders />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <PageWrapper>
          <HeaderSection>
            <BackWrapper href="/" underline="none">
              <BackIcon />
              <BackText>Назад</BackText>
            </BackWrapper>
            <BreadcrumbPath>Админ / Химия / Общая химия</BreadcrumbPath>
          </HeaderSection>

          <VideoSection>
            <input
              type="file"
              accept="video/*"
              ref={videoInputRef}
              style={{ display: "none" }}
              onChange={handleVideoUpload}
            />
            <VideoPreview onClick={openVideoPicker}>
              {videoSrc ? (
                <video
                  src={videoSrc}
                  width="100%"
                  height="100%"
                  controls
                  style={{ borderRadius: "15px", objectFit: "cover" }}
                />
              ) : (
                <PlayIcon />
              )}
            </VideoPreview>

            <TextBlock>
              <Title>Тема:</Title>
              <InvisibleInput
                fullWidth
                multiline
                minRows={2}
                maxRows={8}
                placeholder="Тема аталышын бул жерге жазыңыз..."
                value={lessonTitle}
                onChange={(e) => setLessonTitle(e.target.value)}
                variant="outlined"
              />

              <SubTitle>Домашняя задание</SubTitle>
              <InvisibleInput
                fullWidth
                multiline
                minRows={5}
                maxRows={15}
                placeholder="Үй тапшырманын текстин бул жерге жазыңыз..."
                value={homeworkText}
                onChange={(e) => setHomeworkText(e.target.value)}
                variant="outlined"
              />
            </TextBlock>
          </VideoSection>

          {/* Поставить дедлайн — ортодо */}
          {!finalDeadline && !showPicker && (
            <DeadlineButtonWrapper>
              <DeadlineButton onClick={() => setShowPicker(true)}>
                Поставить дедлайн
              </DeadlineButton>
            </DeadlineButtonWrapper>
          )}

          {/* Дедлайн тандалганда */}
          {finalDeadline && (
            <Box textAlign="center" mb={4}>
              <SelectedDeadline>
                Дедлайн: {formatDate(finalDeadline)}
              </SelectedDeadline>
              <ChangeButton onClick={() => setShowPicker(true)}>
                Изменить дедлайн
              </ChangeButton>
            </Box>
          )}

          {showPicker && (
            <Box maxWidth={500} mx="auto" mb={5}>
              <DeadlineBox>
                <DateTimePicker
                  label="Выберите дату и время"
                  value={tempDeadline}
                  onChange={setTempDeadline}
                  slotProps={{ textField: { fullWidth: true } }}
                />
                <Box display="flex" gap={2} mt={2} justifyContent="flex-end">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setShowPicker(false);
                      setTempDeadline(null);
                    }}
                  >
                    Отмена
                  </Button>
                  <ConfirmDeadlineButton
                    variant="contained"
                    onClick={handleConfirmDeadline}
                    disabled={!tempDeadline}
                  >
                    Поставить дедлайн
                  </ConfirmDeadlineButton>
                </Box>
              </DeadlineBox>
            </Box>
          )}

          <input
            type="file"
            accept=".pdf,.doc,.docx,.txt,.ppt,.pptx"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />

          {!attachedFile ? (
            <FileUploadBig elevation={0} onClick={openFilePicker}>
              <FileUploadText>Прикрепить файл с текстом</FileUploadText>
              <CloudUploadIcon sx={{ fontSize: 40, color: "#999" }} />
            </FileUploadBig>
          ) : (
            <AttachedFileBox>
              <FileName>
                <AttachFileIcon fontSize="small" />
                {attachedFile.name}
              </FileName>
              <IconButton size="small" onClick={removeFile}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </AttachedFileBox>
          )}

          <Box textAlign="center">
            <PublishButton>Публиковать</PublishButton>
          </Box>
        </PageWrapper>
      </LocalizationProvider>
    </>
  );
}
