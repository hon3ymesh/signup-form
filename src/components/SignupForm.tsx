// components/SignupForm.tsx
import React, { useState } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Link,
  Alert,
  Fade,
  Grid
} from '@mui/material';
import { SignupFormData } from '../types';
import { signupData } from '../mockData/signupData';

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    reasonForSignup: '',
    phoneCountry: 'us', // Default to US
    phone: '',
    companyName: '',
    companyRole: '',
    jobTitle: '',
    country: '',
    region: '',
    agreedToTerms: false
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (field: keyof SignupFormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Check if all required fields are filled
    const isFormComplete = 
      formData.reasonForSignup !== '' &&
      formData.phoneCountry !== '' &&
      formData.phone.trim() !== '' &&
      formData.companyName.trim() !== '' &&
      formData.companyRole !== '' &&
      formData.jobTitle.trim() !== '' &&
      formData.country !== '' &&
      formData.region !== '' &&
      formData.agreedToTerms;

    if (isFormComplete) {
      console.log('Form submitted:', formData);
      setShowSuccessMessage(true);
      // Hide message after 5 seconds
      setTimeout(() => setShowSuccessMessage(false), 5000);
    } else {
      alert('Please fill out all fields and agree to the terms and conditions.');
    }
  };

  // Get selected country details for phone input
  const selectedPhoneCountry = signupData.phoneCountries.find(
    country => country.value === formData.phoneCountry
  ) || signupData.phoneCountries[0];

  return (
    <Box
      sx={{
        width: '476px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}
    >
      {/* Success Message */}
      <Fade in={showSuccessMessage}>
        <Alert 
          severity="success" 
          sx={{ 
            mb: 2,
            borderRadius: '8px',
            '& .MuiAlert-message': {
              fontSize: '16px',
              fontWeight: 500
            }
          }}
        >
          🎉 Congratulations! You have successfully signed up for Vistora. Your account is now ready to use!
        </Alert>
      </Fade>
      {/* Reason for signing up */}
      <FormControl fullWidth>
        <InputLabel>Reason for signing up</InputLabel>
        <Select
          value={formData.reasonForSignup}
          label="Reason for signing up"
          onChange={handleInputChange('reasonForSignup')}
          sx={{
            height: '61px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px'
            }
          }}
        >
          {signupData.reasonsForSignup.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Phone with Country Selector */}
      <Box>
        <Typography variant="body2" sx={{ color: '#666', mb: 1, fontSize: '14px' }}>
          Phone
        </Typography>
        <Box sx={{ position: 'relative', width: '476px' }}>
          <TextField
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FormControl sx={{ minWidth: '80px' }}>
                    <Select
                      value={formData.phoneCountry}
                      onChange={handleInputChange('phoneCountry')}
                      variant="standard"
                      disableUnderline
                      sx={{
                        '& .MuiSelect-select': {
                          paddingRight: '24px !important',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          minWidth: '70px'
                        },
                        '& .MuiSelect-icon': {
                          right: '0px'
                        }
                      }}
                      renderValue={(selected) => {
                        const country = signupData.phoneCountries.find(c => c.value === selected);
                        return (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Typography sx={{ fontSize: '16px' }}>
                              {country?.flag || '🇺🇸'}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: '14px', color: '#333' }}>
                              {country?.code || '+1'}
                            </Typography>
                          </Box>
                        );
                      }}
                    >
                      {signupData.phoneCountries.map((country) => (
                        <MenuItem key={country.value} value={country.value}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                            <Typography sx={{ fontSize: '16px' }}>
                              {country.flag}
                            </Typography>
                            <Typography variant="body2" sx={{ minWidth: '40px', fontSize: '14px' }}>
                              {country.code}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: '13px', color: '#666' }}>
                              {country.label}
                            </Typography>
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Box sx={{ 
                    height: '20px', 
                    width: '1px', 
                    backgroundColor: '#E0E0E0', 
                    mx: 1 
                  }} />
                </InputAdornment>
              )
            }}
            sx={{
              width: '476px',
              '& .MuiOutlinedInput-root': {
                height: '61px',
                borderRadius: '8px',
                '& fieldset': {
                  borderColor: '#E0E0E0'
                },
                '&:hover fieldset': {
                  borderColor: '#B0B0B0'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3B82F6'
                }
              },
              '& .MuiOutlinedInput-input': {
                fontSize: '14px',
                '&::placeholder': {
                  color: '#999',
                  fontSize: '14px'
                }
              }
            }}
          />
        </Box>
      </Box>

      {/* Company name */}
      <TextField
        label="Company name"
        value={formData.companyName}
        onChange={handleInputChange('companyName')}
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            height: '61px',
            borderRadius: '8px'
          }
        }}
      />

      {/* Company Role */}
      <FormControl fullWidth>
        <InputLabel>Company Role</InputLabel>
        <Select
          value={formData.companyRole}
          label="Company Role"
          onChange={handleInputChange('companyRole')}
          sx={{
            height: '61px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px'
            }
          }}
        >
          {signupData.companyRoles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Job Title */}
      <TextField
        label="Job Title"
        value={formData.jobTitle}
        onChange={handleInputChange('jobTitle')}
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            height: '61px',
            borderRadius: '8px'
          }
        }}
      />

      {/* Country */}
      <FormControl fullWidth>
        <InputLabel>Country</InputLabel>
        <Select
          value={formData.country}
          label="Country"
          onChange={handleInputChange('country')}
          sx={{
            height: '61px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px'
            }
          }}
        >
          {signupData.countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Region */}
      <FormControl fullWidth>
        <InputLabel>Region</InputLabel>
        <Select
          value={formData.region}
          label="Region"
          onChange={handleInputChange('region')}
          sx={{
            height: '61px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px'
            }
          }}
        >
          {signupData.regions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Terms and Conditions */}
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.agreedToTerms}
            onChange={handleInputChange('agreedToTerms')}
            sx={{ color: '#3B82F6' }}
          />
        }
        label={
          <Typography variant="body2" sx={{ color: '#666' }}>
            I have read and agreed to Vistora{' '}
            <Link 
              href="https://vistora.com/terms-and-conditions" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: '#3B82F6', 
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Terms and Conditions
            </Link>
            , &{' '}
            <Link 
              href="https://vistora.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: '#3B82F6', 
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Privacy Policy
            </Link>
            .
          </Typography>
        }
      />

      {/* Sign Up Button */}
      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        sx={{
          height: '61px',
          backgroundColor: '#3B47A3',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 600,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#2D3A8C'
          }
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignupForm;