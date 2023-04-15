import { FieldArray, Formik } from 'formik';
import { SetField, emptySet } from './SetField';
import { SetType } from 'types';
import { Add } from '@mui/icons-material';
import { Button, IconButton, Stack } from '@mui/material';
import { TextField } from 'renderer/components';

export type ThumbnailsFormValuesType = {
  sets: SetType[];
  theme: string;
  tournamentEdition: string;
  tournamentName: string;
};
const initialValues: ThumbnailsFormValuesType = {
  sets: [emptySet],
  theme: 'nycmelee',
  tournamentEdition: '',
  tournamentName: '',
};

type ThumbnailsFormProps = {
  onSubmit: (values: ThumbnailsFormValuesType) => void;
};

export const ThumbnailsForm = ({ onSubmit }: ThumbnailsFormProps) => {
  const handleFormikSubmit = (values: ThumbnailsFormValuesType) => {
    onSubmit(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormikSubmit}>
      {({ dirty, handleSubmit, values: { sets } }) => {
        console.log({ sets });
        const handleAddSet = () => {};

        return (
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Stack p={2} spacing={4}>
              <Stack alignItems="flex-start">
                <TextField name="tournamentEdition" />
              </Stack>
              <FieldArray
                name="sets"
                render={(arrayHelpers) => {
                  const handleRemoveSet = (index: number) => {
                    arrayHelpers.remove(index);
                  };

                  return (
                    <Stack spacing={2}>
                      {sets.map((_, i) => (
                        <SetField
                          index={i}
                          key={i}
                          onRemoveSet={handleRemoveSet}
                          name={`sets.${i}`}
                        />
                      ))}
                      <IconButton
                        disabled={
                          Boolean(sets.length) &&
                          JSON.stringify(sets[sets.length - 1]) ===
                            JSON.stringify(emptySet)
                        }
                        onClick={() => arrayHelpers.push(emptySet)}
                        sx={{ alignSelf: 'flex-end' }}
                      >
                        <Add />
                      </IconButton>
                    </Stack>
                  );
                }}
              />
              <Button
                disabled={!dirty}
                sx={{ alignSelf: 'center' }}
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </form>
        );
      }}
    </Formik>
  );
};
