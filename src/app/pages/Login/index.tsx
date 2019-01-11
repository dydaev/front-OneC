import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField } from '../../components';
import classNames from 'classnames';

const styles = (theme: any) => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  }
});

export interface Props {
  classes: any;
}

function ContainedButtons(props: Props) {
  const { classes } = props;
  return (
    <div>
      <TextField
        id="standard-dense"
        label="Dense"
        className={classNames(classes.textField, classes.dense)}
        margin="dense"
      />
      <TextField
        id="standard-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
      />
      <Button variant="contained" className={classes.button}>
        sign in
      </Button>
    </div>
  );
}

export default withStyles(styles)(ContainedButtons);
