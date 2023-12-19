import React, {FC, useState} from 'react';
import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import COLORS from 'constants/colors';
import TextInputField from 'components/TextInputField';
import Button from 'components/Button';

type LoginFormProps = {
  navigation: any;
};

const LoginForm: FC<LoginFormProps> = ({navigation}): React.JSX.Element => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);

  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const username = await AsyncStorage.getItem('username');
    const password = await AsyncStorage.getItem('password');
    console.log(username, password);
    if (username === data.username && password === data.password) {
      reset();
      Alert.alert('Success', 'Login Successful', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ]);
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <>
      <TextInputField
        name="username"
        label="Username"
        placeholder="Enter username"
        control={control}
        error={errors.username?.message}
      />
      <TextInputField
        name="password"
        label="Password"
        placeholder="Enter password"
        isPassword={isPasswordShown}
        control={control}
        error={errors.password?.message}>
        <TouchableOpacity
          onPress={() => setIsPasswordShown(!isPasswordShown)}
          style={styles.IconPassword}>
          {isPasswordShown === true ? (
            <Icon name="eye-off" size={24} color={COLORS.BLACK} />
          ) : (
            <Icon name="eye" size={24} color={COLORS.BLACK} />
          )}
        </TouchableOpacity>
      </TextInputField>

      <Button
        title="Login"
        filled
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  IconPassword: {
    position: 'absolute',
    right: 12,
  },
  button: {
    marginTop: 18,
    marginBottom: 4,
  },
});

export default LoginForm;
