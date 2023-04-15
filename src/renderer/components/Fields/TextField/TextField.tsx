import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import { useField } from 'formik';

type TextFieldProps = Omit<MuiTextFieldProps, 'name'> & { name: string };

export const TextField = ({ label, name, ...props }: TextFieldProps) => {
  const [{ onChange, value }] = useField(name);

  return (
    <MuiTextField
      label={label || name}
      name={name}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};
