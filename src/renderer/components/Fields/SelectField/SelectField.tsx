import {
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  Stack,
} from '@mui/material';
import { useField } from 'formik';
import { OptionType } from 'types';

type SelectFieldProps = SelectProps & { options: OptionType[] };

export const SelectField = ({
  label,
  name = '',
  options,
  ...props
}: SelectFieldProps) => {
  const [{ onChange, value = '' }] = useField(name);

  return (
    <Stack>
      <InputLabel shrink>{label || name}</InputLabel>
      <Select {...props} name={name} onChange={onChange} value={value}>
        {options.map(({ label, value: optionValue }) => (
          <MenuItem key={optionValue} value={optionValue}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};
