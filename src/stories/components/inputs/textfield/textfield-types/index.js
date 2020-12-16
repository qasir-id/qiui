// Vendors
import React from 'react';

// Components
import TextField from 'components/inputs/TextField';

const TextFieldTypes = () => {
  return (
    <>
      <TextField label="Single Line Field" variant="outlined" />
      <TextField label="Multi Line Field" variant="outlined" multiline rows={4} />
    </>
  );
};

export default TextFieldTypes;
