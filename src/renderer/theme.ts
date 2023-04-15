import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: false,
      },
    },
    MuiSelect: {
      defaultProps: {
        margin: 'none',
        variant: 'standard',
      },
    },
    MuiStack: {
      defaultProps: {
        direction: 'column',
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: false,
        margin: 'none',
        variant: 'standard',
      },
    },
  },
  palette: {
    mode: 'dark',
  },
});
