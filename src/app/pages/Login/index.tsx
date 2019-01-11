import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Paper, Grid } from '../../components';
import classNames from 'classnames';

import { isValideEmail } from 'app/utils/validation';

import { styles } from './style';

export interface Props {
  classes: any;
}

export interface State {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  contact: string;
  signUp: boolean;
  fieldsIsNotEmpty: boolean;
  invalidEmail: boolean;
  invalidPassword: boolean;
}

class Login extends React.Component<Props, State> {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    fieldsIsNotEmpty: false,
    invalidEmail: false,
    invalidPassword: false,
    signUp: false
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key: string = e.target.id;
    const value: string = e.target.value;
    const checkinFields = this.state.signUp
      ? ['name', 'email', 'password', 'contact']
      : ['email', 'password'];

    const updatedState = {
      ...this.state,
      [key]: value
    };

    //@ts-ignore
    this.setState({
      ...updatedState,
      fieldsIsNotEmpty: Object.keys(updatedState).every(
        (stateKey: string) =>
          typeof updatedState[stateKey] == 'boolean' ||
          ((checkinFields.includes(stateKey) &&
            typeof updatedState[stateKey] == 'string' &&
            updatedState[stateKey]) ||
            (!checkinFields.includes(stateKey) && true))
      ),
      invalidEmail: updatedState.email && !isValideEmail(updatedState.email),
      invalidPassword: updatedState.confirmPassword != updatedState.password
    });
  };

  handleSentData = () => {
    this.state.fieldsIsNotEmpty && alert(this.state.password);
    this.setState({
      signUp: !this.state.signUp
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid item container justify="center" md={12} spacing={8}>
            {this.state.signUp ? (
              <Grid item xs={12} sm={12} md={this.state.signUp ? 12 : 4}>
                <TextField
                  required
                  autoFocus
                  id="name"
                  label="name"
                  onChange={this.handleChange}
                  className={classNames(classes.textField, classes.dense)}
                  onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) =>
                    e.key == 'Enter' && this.handleSentData()
                  }
                  margin="dense"
                />
              </Grid>
            ) : null}
            {this.state.signUp ? (
              <Grid item xs={12} sm={12} md={this.state.signUp ? 12 : 4}>
                <TextField
                  required
                  autoFocus
                  id="contact"
                  label="contact"
                  onChange={this.handleChange}
                  className={classNames(classes.textField, classes.dense)}
                  onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) =>
                    e.key == 'Enter' && this.handleSentData()
                  }
                  margin="dense"
                />
              </Grid>
            ) : null}
            <Grid item xs={12} sm={12} md={this.state.signUp ? 12 : 4}>
              <TextField
                error={this.state.invalidEmail ? true : false}
                autoFocus
                required
                id="email"
                label="email"
                type="email"
                onChange={this.handleChange}
                className={classNames(classes.textField, classes.dense)}
                onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) =>
                  e.key == 'Enter' && this.handleSentData()
                }
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={this.state.signUp ? 12 : 4}>
              <TextField
                required
                id="password"
                onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) =>
                  e.key == 'Enter' && this.handleSentData()
                }
                label="password"
                className={classes.textField}
                type="password"
                onChange={this.handleChange}
                autoComplete="current-password"
                margin="normal"
              />
            </Grid>
            {this.state.signUp ? (
              <Grid item xs={12} sm={12} md={this.state.signUp ? 12 : 4}>
                <TextField
                  error={this.state.invalidPassword ? true : false}
                  id="confirmPassword"
                  onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) =>
                    e.key == 'Enter' && this.handleSentData()
                  }
                  label="confirm password"
                  className={classes.textField}
                  type="password"
                  onChange={this.handleChange}
                  autoComplete="current-password"
                  margin="normal"
                />
              </Grid>
            ) : null}
            <Grid
              item
              xs={12}
              sm={12}
              className={classes.buttonGrid}
              md={this.state.signUp ? 12 : 4}
            >
              <Button
                disabled={
                  !this.state.fieldsIsNotEmpty ||
                  this.state.invalidEmail ||
                  (this.state.signUp ? this.state.invalidPassword : false)
                }
                variant="contained"
                onClick={this.handleSentData}
                className={classes.button}
              >
                {this.state.signUp ? 'sign up' : 'sign in'}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
