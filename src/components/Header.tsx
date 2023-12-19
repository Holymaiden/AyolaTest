import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLORS from 'constants/colors';

type HeaderProps = {
  message: string;
  subMessage: string;
  style?: any;
};

const Header: React.FC<HeaderProps> = ({
  message,
  subMessage,
  ...props
}): React.JSX.Element => {
  return (
    <View style={styles.container} {...props}>
      <Text style={styles.header}>{message}</Text>
      <Text style={styles.subHeader}>{subMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 22,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: COLORS.BLACK,
  },
  subHeader: {
    fontSize: 16,
    color: COLORS.BLACK,
  },
});

export default Header;
