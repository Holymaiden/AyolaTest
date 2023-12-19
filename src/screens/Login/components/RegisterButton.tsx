import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import COLORS from 'constants/colors';

type RegisterButtonProps = {
  navigation: any;
};

const RegisterButton: FC<RegisterButtonProps> = ({
  navigation,
}): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Don't have an account ? </Text>
      <Pressable onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 22,
  },
  text: {
    fontSize: 16,
    color: COLORS.BLACK,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.PRIMARY,
    fontWeight: 'bold',
    marginLeft: 6,
  },
});

export default RegisterButton;
