import { FieldArray, Formik } from 'formik';
import { SetField, emptySet } from './SetField';
import { SetType } from 'types';
import { Add } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
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
      {({ handleSubmit, values: { sets } }) => {
        console.log({ sets });
        const handleAddSet = () => {};

        return (
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Stack direction="column">
              {/* <code>{JSON.stringify(values)}</code> */}
              <Stack alignItems="flex-start" p={2}>
                <TextField name="tournamentEdition" />
              </Stack>
              <FieldArray
                name="sets"
                render={(arrayHelpers) => {
                  return (
                    <Stack p={2} spacing={2}>
                      {sets.map((set, i) => (
                        <SetField index={i} key={i} name={`sets.${i}`} />
                      ))}
                      <IconButton
                        disabled={
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
            </Stack>
          </form>
        );
      }}
    </Formik>
  );
};
