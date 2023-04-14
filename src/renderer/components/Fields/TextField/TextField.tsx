import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';

type TextFieldProps = Omit<MuiTextFieldProps, 'name'> & { name: string };

export const TextField = ({ label, name, ...props }: TextFieldProps) => {
  return <MuiTextField label={label || name} {...props} />;
};
