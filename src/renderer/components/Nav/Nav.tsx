import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const NavComponent = styled('nav')({
  backgroundColor: 'indigo',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  padding: '8px',
  width: '100%',
});

export const Nav = () => (
  <NavComponent>
    <Typography fontSize={24}>SSBM Thumbnails</Typography>
  </NavComponent>
);
