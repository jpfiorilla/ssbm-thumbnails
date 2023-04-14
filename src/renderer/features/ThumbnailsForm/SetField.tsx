import { Card, Stack, Typography } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'renderer/components';
import { SetType } from 'types';

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

type SetFieldType = { index: number; name: string };

export const SetField = ({ index, name }: SetFieldType) => {
  return (
    <Card sx={{ display: 'flex', padding: 2 }}>
      <Stack>
        <Typography fontSize={12}>{`Set ${index + 1}`}</Typography>
        <Stack>
          <Field as={TextField} label="Set name" name={`${name}.name`} />
        </Stack>
      </Stack>
    </Card>
  );
};
