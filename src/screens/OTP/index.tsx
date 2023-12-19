import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import COLORS from 'constants/colors';
import OTPForm from './components/Form';
import Header from 'components/Header';
import {OTPScreenProps} from 'types/Navigation';

const OTPScreen: FC<OTPScreenProps> = ({
  navigation,
  route,
}): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <Header
          message="Enter Verification Code"
          subMessage="Enter the 6-digit that we have send via the phone number"
          style={styles.header}
        />

        <OTPForm navigation={navigation} user={route.params} />
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
  header: {
    alignItems: 'center',
    marginVertical: 30,
  },
});

export default OTPScreen;
