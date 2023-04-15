import {
  Autocomplete,
  Card,
  IconButton,
  Stack,
  TextField as MuiTextField,
  Typography,
  AutocompleteRenderInputParams,
} from '@mui/material';
import { Remove } from '@mui/icons-material';
import {
  AutocompleteField,
  Grid,
  SelectField,
  TextField,
} from 'renderer/components';
import { OptionType, SetType } from 'types';
import { CHARACTERS } from 'consts';

const characterOptions: OptionType[] = CHARACTERS.map(({ name, slug }) => ({
  label: name,
  value: slug,
}));

export const emptySet: SetType = {
  name: '',
  playerA: {
    character: '',
    costume: 0,
    tag: '',
  },
  playerB: {
    character: '',
    costume: 0,
    tag: '',
  },
};

type SetFieldType = {
  index: number;
  name: string;
  onRemoveSet: (index: number) => void;
};

export const SetField = ({ index, name, onRemoveSet }: SetFieldType) => {
  const handleRemoveSet = () => {
    onRemoveSet(index);
  };

  return (
    <Card sx={{ padding: 2 }}>
      <Stack spacing={1}>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Typography fontSize={12}>{`Set ${index + 1}`}</Typography>
          <IconButton onClick={handleRemoveSet} size="small">
            <Remove />
          </IconButton>
        </Stack>
        <TextField label="Set name" name={`${name}.name`} />
        <Grid gap={4} gridTemplateColumns="1fr 1fr">
          <Stack spacing={1}>
            <TextField name={`${name}.playerA.tag`} />
            <Stack direction="row">
              {/* <TextField name={`${name}.playerA.character`} sx={{ flex: 1 }} /> */}
              {/* <AutocompleteField
                getOptionLabel={(option: OptionType | string) => {
                  if (typeof option === 'string') return option;
                  return option.label;
                }}
                options={characterOptions}
                renderInput={(params: AutocompleteRenderInputParams) => (
                  <MuiTextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                    name={`${name}.playerA.character`}
                    sx={{ flex: 1 }}
                  />
                )}
              /> */}
              <SelectField
                name={`${name}.playerA.character`}
                options={characterOptions}
                sx={{ minWidth: 200 }}
              />
            </Stack>
          </Stack>
          <Stack spacing={1}>
            <TextField name={`${name}.playerB.tag`} />
            <Stack direction="row">
              <TextField name={`${name}.playerB.character`} sx={{ flex: 1 }} />
            </Stack>
          </Stack>
        </Grid>
      </Stack>
    </Card>
  );
};
