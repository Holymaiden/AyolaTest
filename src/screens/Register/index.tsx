import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import COLORS from 'constants/colors';
import Header from 'components/Header';
import RegisterForm from '@screens/Register/components/Form';
import LoginButton from '@screens/Register/components/LoginButton';
import {RegisterScreenProps} from 'types/Navigation';

const RegisterScreen: FC<RegisterScreenProps> = ({
  navigation,
}): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <Header
          message="Create Account"
          subMessage="Connect with your friend today!"
        />

        <RegisterForm navigation={navigation} />

        <LoginButton navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  container: {
    flex: 1,
    marginHorizontal: 22,
  },
});

export default RegisterScreen;
