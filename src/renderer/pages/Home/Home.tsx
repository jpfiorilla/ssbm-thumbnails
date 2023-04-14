import { ThumbnailsForm, ThumbnailsFormValuesType } from 'renderer/features';

export const Home = () => {
  const handleSubmit = (values: ThumbnailsFormValuesType) => {
    console.log({ values });
  };

  return <ThumbnailsForm onSubmit={handleSubmit} />;
};
