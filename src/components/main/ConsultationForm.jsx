import React from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Container,
  Card,
  useTheme
} from '@mui/material';

const ConsultationForm = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: '#F2F7FB',
        minHeight: '646px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <Card
          sx={{
            position: 'relative',
            maxWidth: '643px',
            height: '468px',
            margin: '0 auto',
            borderRadius: '15.5px',
            border: '1px solid #FF8FA3',
            background: '#F5F2F9',
            p: 4,
            boxSizing: 'border-box'
          }}
        >
          {/* Header */}
          <Typography
            variant="h1"
            sx={{
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#1D3452',
              mb: 4
            }}
          >
            Запишитесь на консультацию
          </Typography>

          {/* Form Fields */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Name Field */}
            <TextField
              placeholder="Имя"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '7.5px',
                  border: '1px solid #FF8FA3',
                  background: 'white',
                  height: '51px',
                  '& fieldset': {
                    border: 'none'
                  }
                }
              }}
            />

            {/* Phone Field */}
            <TextField
              placeholder="Телефон"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '7.5px',
                  border: '1px solid #FF8FA3',
                  background: 'white',
                  height: '51px',
                  '& fieldset': {
                    border: 'none'
                  }
                }
              }}
            />

            {/* Direction Dropdown */}
            <TextField
              select
              placeholder="Направление"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '7.5px',
                  border: '1px solid #FF8FA3',
                  background: 'white',
                  height: '51px',
                  '& fieldset': {
                    border: 'none'
                  }
                }
              }}
              SelectProps={{
                displayEmpty: true,
                renderValue: (selected) => {
                  if (!selected) {
                    return 'Направление';
                  }
                  return selected;
                },
                IconComponent: (props) => (
                  <svg 
                    width="10" 
                    height="6" 
                    viewBox="0 0 10 6" 
                    fill="none"
                    {...props}
                    style={{
                      marginRight: '8px',
                      ...props.style
                    }}
                  >
                    <path 
                      d="M1 1L5 5L9 1" 
                      stroke="#1D3452" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                )
              }}
            >
              <MenuItem value="">Направление</MenuItem>
              {/* TODO: Add actual menu items */}
            </TextField>

            {/* Comment Field */}
            <TextField
              placeholder="Комментарий"
              multiline
              rows={3}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '7.5px',
                  border: '1px solid #FF8FA3',
                  background: 'white',
                  '& fieldset': {
                    border: 'none'
                  }
                }
              }}
            />
          </Box>
        </Card>

        {/* Submit Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              width: '317.18px',
              height: '53px',
              borderRadius: '8px',
              background: '#FF8FA3',
              border: '1px solid #F5F2F9',
              color: '#F5F5F5',
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                background: '#FF8FA3',
                boxShadow: 'none'
              }
            }}
          >
            Отправить заявку
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ConsultationForm;