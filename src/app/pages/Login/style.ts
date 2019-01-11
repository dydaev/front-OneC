export const styles = (theme: any) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: '20% auto',
    maxWidth: 500
  },
  buttonGrid: {
    display: 'grid',
    justifyContent: 'right',
    alignItems: 'end'
  },
  button: {
    margin: theme.spacing.unit,
    width: 120
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '95%'
  },
  dense: {
    marginTop: 19
  }
});
