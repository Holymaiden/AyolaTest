import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import COLORS from 'constants/colors';
import Header from 'components/Header';
import Button from 'components/Button';
import {HomeScreenProps} from 'types/Navigation';

const HomeScreen: FC<HomeScreenProps> = ({navigation}): React.JSX.Element => {
  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <Header
          message="Hi Welcome Back ! 👋"
          subMessage="Hello again you have been missed!"
        />
        <Button title="Logout" onPress={handleLogout} color={COLORS.PRIMARY} />
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

export default HomeScreen;
