import * as React from 'react';

import * as styles from './style.css';

class MainMenuContainer extends React.Component<any, any> {
  handleAlert = () => {
    alert('some text');
  };

  render() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, (child: any) =>
      React.cloneElement(child, {
        onAlert: this.handleAlert
      })
    );

    return (
      <div className="d-flex">
        <div className={styles.menuIcon} />
        <div className="container">
          <div style={{ height: 800 }}>{childrenWithProps}</div>
        </div>
      </div>
    );
  }
}

export default MainMenuContainer;
