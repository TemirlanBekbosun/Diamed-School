import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F8F8F8",
        py: 10,
        px: 12.5,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Grid container spacing={10}>
          {/* Левая колонка - Контактная информация */}
          <Grid item xs={12} md={5}>
            <Box>
              {/* Заголовок */}
              <Typography
                sx={{
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "#212B36",
                  fontFamily: "Roboto, sans-serif",
                  mb: 4,
                }}
              >
                Контакты
              </Typography>

              {/* Email */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#212B36",
                    fontFamily: "Roboto, sans-serif",
                    mb: 1,
                  }}
                >
                  Email
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon
                    sx={{
                      fontSize: "20px",
                      color: "#212B36",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#3366CC",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    info@diamed-school.kg
                  </Typography>
                </Box>
              </Box>

              {/* Телефон */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#212B36",
                    fontFamily: "Roboto, sans-serif",
                    mb: 1,
                  }}
                >
                  Телефон
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 0.5,
                  }}
                >
                  <PhoneIcon
                    sx={{
                      fontSize: "20px",
                      color: "#212B36",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#3366CC",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    +996 (555) 808 - 001
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon
                    sx={{
                      fontSize: "20px",
                      color: "#212B36",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#3366CC",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    +996 (505) 888 - 080
                  </Typography>
                </Box>
              </Box>

              {/* Адрес */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#212B36",
                    fontFamily: "Roboto, sans-serif",
                    mb: 1,
                  }}
                >
                  Адрес
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationIcon
                    sx={{
                      fontSize: "20px",
                      color: "#212B36",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#3366CC",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    г. Бишкек, ул. Науки, 5
                  </Typography>
                </Box>
              </Box>

              {/* Рабочие дни */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#212B36",
                    fontFamily: "Roboto, sans-serif",
                    mb: 1,
                  }}
                >
                  Наши рабочие дни:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#3366CC",
                    fontFamily: "Roboto, sans-serif",
                    mb: 0.5,
                  }}
                >
                  Пн - Чт, Сб - Вс: 11:00 - 18:00
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#3366CC",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Пт: выходной
                </Typography>
              </Box>

              {/* Мессенджеры */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#212B36",
                    fontFamily: "Roboto, sans-serif",
                    mb: 2,
                  }}
                >
                  Мессенджеры
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {/* WhatsApp */}
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#25D366",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      W
                    </Typography>
                  </Box>

                  {/* Instagram */}
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      I
                    </Typography>
                  </Box>

                  {/* Telegram */}
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#0088CC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      T
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Правая колонка - Форма обратной связи */}
          <Grid item xs={12} md={7}>
            <Box>
              {/* Поля формы */}
              <Box sx={{ mb: 3 }}>
                <TextField
                  placeholder="Имя"
                  fullWidth
                  sx={{
                    mb: 2.5,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#FCE4EC",
                      borderRadius: "8px",
                      height: "50px",
                      "& fieldset": {
                        borderColor: "#FCE4EC",
                        borderWidth: "1px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FCE4EC",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FCE4EC",
                      },
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "16px",
                      color: "#212B36",
                      "&::placeholder": {
                        color: "#919EAB",
                        opacity: 1,
                      },
                    },
                  }}
                />
                <TextField
                  placeholder="Email"
                  fullWidth
                  sx={{
                    mb: 2.5,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#FCE4EC",
                      borderRadius: "8px",
                      height: "50px",
                      "& fieldset": {
                        borderColor: "#FCE4EC",
                        borderWidth: "1px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FCE4EC",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FCE4EC",
                      },
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "16px",
                      color: "#212B36",
                      "&::placeholder": {
                        color: "#919EAB",
                        opacity: 1,
                      },
                    },
                  }}
                />
                <TextField
                  placeholder="Номер"
                  fullWidth
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#FCE4EC",
                      borderRadius: "8px",
                      height: "50px",
                      "& fieldset": {
                        borderColor: "#FCE4EC",
                        borderWidth: "1px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FCE4EC",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FCE4EC",
                      },
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "16px",
                      color: "#212B36",
                      "&::placeholder": {
                        color: "#919EAB",
                        opacity: 1,
                      },
                    },
                  }}
                />
              </Box>

              {/* Чекбокс согласия */}
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#FCE4EC",
                      "&.Mui-checked": {
                        color: "#3366CC",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#555555",
                      fontFamily: "Roboto, sans-serif",
                      lineHeight: 1.4,
                    }}
                  >
                    Я подтверждаю ознакомление с{" "}
                    <Link
                      href="#"
                      sx={{
                        color: "#555555",
                        textDecoration: "underline",
                        "&:hover": {
                          color: "#3366CC",
                        },
                      }}
                    >
                      Политикой
                    </Link>{" "}
                    обработки персональных данных и даю согласие на обработку
                    персональных данных в порядке и на условиях, указанных в
                    Политике.
                  </Typography>
                }
                sx={{
                  alignItems: "flex-start",
                  mb: 3,
                }}
              />

              {/* Кнопка отправки */}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#3366CC",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "Roboto, sans-serif",
                  height: "50px",
                  borderRadius: "8px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#2C5AA0",
                  },
                }}
              >
                Отправить заявку
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
