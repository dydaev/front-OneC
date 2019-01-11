import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button as MButton } from '@material-ui/core';

const styles = (theme: any) => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

export interface Props {
  classes: any;
}

class ContainedButtons extends React.Component<Props, any> {
  render() {
    const props = this.props;

    return <MButton {...props} className={props.classes.button} />;
  }
}

export const Button = withStyles(styles)(ContainedButtons);
