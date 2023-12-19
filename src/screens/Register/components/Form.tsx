import React, {FC, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import COLORS from 'constants/colors';
import TextInputField from 'components/TextInputField';
import Button from 'components/Button';

type RegisterFormProps = {
  navigation: any;
};

const RegisterForm: FC<RegisterFormProps> = ({
  navigation,
}): React.JSX.Element => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(true);

  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email().required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
        'Password must contain at least one special character',
      ),
    confirmPassword: yup.string().required('Confirm Password is required'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    reset();
    navigation.navigate('OTP', {
      username: data.username,
      password: data.password,
    });
  };

  return (
    <>
      <TextInputField
        control={control}
        name="username"
        error={errors.username?.message}
        label="Username"
        placeholder="Enter username"
      />

      <TextInputField
        control={control}
        name="email"
        error={errors.email?.message}
        label="Email"
        placeholder="Enter email"
        keyboardType="email-address"
      />

      <TextInputField
        control={control}
        name="password"
        error={errors.password?.message}
        label="Password"
        placeholder="Enter password"
        isPassword={isPasswordShown}>
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

      <TextInputField
        control={control}
        name="confirmPassword"
        error={errors.confirmPassword?.message}
        label="Confirm Password"
        placeholder="Enter Confirm password"
        isPassword={isConfirmPasswordShown}>
        <TouchableOpacity
          onPress={() => setIsConfirmPasswordShown(!isConfirmPasswordShown)}
          style={styles.IconPassword}>
          {isConfirmPasswordShown === true ? (
            <Icon name="eye-off" size={24} color={COLORS.BLACK} />
          ) : (
            <Icon name="eye" size={24} color={COLORS.BLACK} />
          )}
        </TouchableOpacity>
      </TextInputField>

      <Button
        title="Register"
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

export default RegisterForm;
