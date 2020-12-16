// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import TextFieldTypes from './textfield-types';
import TextFieldTypesDocs from './textfield-types/docs.mdx';

import TextFieldFormProps from './textfield-form-props';
import TextFieldFormPropsDocs from './textfield-form-props/docs.mdx';

import TextFieldValidation from './textfield-validation';
import TextFieldValidationDocs from './textfield-validation/docs.mdx';

import TextFieldMultiline from './textfield-multiline';
import TextFieldMultilineDocs from './textfield-multiline/docs.mdx';

import TextFieldSelect from './textfield-select';
import TextFieldSelectDocs from './textfield-select/docs.mdx';

import TextFieldIcons from './textfield-icons';
import TextFieldIconsDocs from './textfield-icons/docs.mdx';

import TextFieldInputAdornments from './textfield-input-adornments';
import TextFieldInputAdornmentsDocs from './textfield-input-adornments/docs.mdx';

import 'font-family.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Inputs/TextField/Example',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
  },
};

export const types = () => (
  <Wrapper>
    <TextFieldTypes />
  </Wrapper>
);
types.story = {
  parameters: {
    docs: {
      page: TextFieldTypesDocs,
    },
  },
};

export const formProps = () => (
  <Wrapper>
    <TextFieldFormProps />
  </Wrapper>
);
formProps.story = {
  parameters: {
    docs: {
      page: TextFieldFormPropsDocs,
    },
  },
};

export const validation = () => (
  <Wrapper>
    <TextFieldValidation />
  </Wrapper>
);
validation.story = {
  parameters: {
    docs: {
      page: TextFieldValidationDocs,
    },
  },
};

export const multiline = () => (
  <Wrapper>
    <TextFieldMultiline />
  </Wrapper>
);
multiline.story = {
  parameters: {
    docs: {
      page: TextFieldMultilineDocs,
    },
  },
};

export const select = () => (
  <Wrapper>
    <TextFieldSelect />
  </Wrapper>
);
select.story = {
  parameters: {
    docs: {
      page: TextFieldSelectDocs,
    },
  },
};

export const icons = () => (
  <Wrapper>
    <TextFieldIcons />
  </Wrapper>
);
icons.story = {
  parameters: {
    docs: {
      page: TextFieldIconsDocs,
    },
  },
};

export const inputAdornments = () => (
  <Wrapper>
    <TextFieldInputAdornments />
  </Wrapper>
);
inputAdornments.story = {
  parameters: {
    docs: {
      page: TextFieldInputAdornmentsDocs,
    },
  },
};
