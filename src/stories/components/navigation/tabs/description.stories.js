// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { action } from '@storybook/addon-actions';


// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import SimpleTabs from './tabs-simple';
import SimpleTabsDocs from './description.docs.mdx';

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
  title: 'Components/Navigation/Tabs',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
  },
  argTypes: {
    fullWidth: {
      name: 'Full Width',
      control: {
        type: 'select',
        options: ['standard', 'scrollable', 'fullWidth']
      }
    }
  }
};
export const description = ({fullWidth}) => (
  <Wrapper>
    <SimpleTabs 
      variant={fullWidth}
      onClick={action('onClick')}
      onMouseEnter={action('onMouseEnter')}
      onMouseLeave={action('onMouseLeave')}
    />
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: SimpleTabsDocs,
    },
  },
};
