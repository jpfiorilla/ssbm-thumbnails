import { Autocomplete, AutocompleteProps } from '@mui/material';
import { useField } from 'formik';

export const AutocompleteField = (props: AutocompleteProps) => {
  const [{ onChange, value = '' }] = useField(props.name);

  const handleChange = (_, newValue: string) => {
    onChange(newValue);
  };

  return (
    <Autocomplete {...props} onChange={handleChange} value={value || ''} />
  );
};
