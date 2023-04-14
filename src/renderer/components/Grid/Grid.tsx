import { Box } from '@mui/material';

export type GridProps = { children: JSX.Element };

export const Grid = ({ children }: GridProps) => (
  <Box display="grid">{children}</Box>
);
