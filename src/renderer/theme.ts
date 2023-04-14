import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: false,
        margin: 'none',
        variant: 'standard',
      },
    },
  },
});
