import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import COLORS from 'constants/colors';
import Header from 'components/Header';
import LoginForm from 'screens/Login/components/Form';
import RegisterButton from 'screens/Login/components/RegisterButton';
import {LoginScreenProps} from 'types/Navigation';

const LoginScreen = ({navigation}: LoginScreenProps): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <Header
          message="Hi Welcome Back ! 👋"
          subMessage="Hello again you have been missed!"
        />

        <LoginForm navigation={navigation} />

        <RegisterButton navigation={navigation} />
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

export default LoginScreen;
