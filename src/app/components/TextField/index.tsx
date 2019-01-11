import * as React from 'react';

import { TextField as MTextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme: any) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

export interface Props {
  classes: any;
}

class MTextFields extends React.Component<Props, any> {
  render() {
    const props = this.props;

    return <MTextField {...props} className={props.classes.textField} />;
  }
}

export const TextField = withStyles(styles)(MTextFields);
