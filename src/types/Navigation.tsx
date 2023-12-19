import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  OTP: {username: string; password: string};
  Home: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home',
  undefined
>;

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login',
  undefined
>;

export type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Register',
  undefined
>;

export type OTPScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OTP',
  undefined
>;
