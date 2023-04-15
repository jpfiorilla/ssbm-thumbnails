import { Box, BoxProps } from '@mui/material';

export type GridProps = Pick<
  BoxProps,
  'children' | 'gap' | 'gridTemplateColumns'
>;

export const Grid = ({ children, ...props }: GridProps) => (
  <Box display="grid" {...props}>
    {children}
  </Box>
);
