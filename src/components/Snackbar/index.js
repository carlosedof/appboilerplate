import * as React from 'react';
import { Snackbar as Snackpaper } from 'react-native-paper';
import { setRef } from './snackbarUtils';
import { Text } from '../../common';
import { Colors, Metrics } from '../../config';

export default class Snackbar extends React.Component {
  state = {
    visible: false,
    text: '',
  };

  componentDidMount() {
    setRef(this);
  }

  setInfos = (infos, open) => {
    this.setState(() => ({
      visible: open,
      text: infos.text,
    }));
  };

  closeSnackbar = () => this.setState({ visible: false });

  render() {
    const { visible, text } = this.state;

    return (
      <Snackpaper
        duration={5000}
        style={{ backgroundColor: Colors.mainTheme.primary }}
        visible={visible}
        onDismiss={this.closeSnackbar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}
      >
        <Text
          textAlign="left"
          size={Metrics.fontSize.xsm}
          color={Colors.mainTheme.secondary}
        >
          {text}
        </Text>
      </Snackpaper>
    );
  }
}
