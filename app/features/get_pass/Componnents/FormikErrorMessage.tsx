const FormikErrorMessage = ({
  touched,
  error,
}: {
  touched?: any;
  error?: any;
}) => {
  if (!touched || !error) return null;
  return (
    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
      <span className="font-medium">{error}</span>
    </p>
  );
};

export default FormikErrorMessage;
