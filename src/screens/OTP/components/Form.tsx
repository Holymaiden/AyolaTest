import React, {FC, useEffect, useRef, useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from 'components/Button';
import COLORS from 'constants/colors';

type OTPFormProps = {
  navigation: any;
  user: {
    username: string;
    password: string;
  };
};
const OTPForm: FC<OTPFormProps> = ({navigation, user}): React.JSX.Element => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpInputs: any = Array(6)
    .fill(0)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    .map((_, _i) => useRef(null));
  const [error, setError] = useState(false);

  const [timer, setTimer] = useState(30);

  const handleOtpChange = (value: string, index: number) => {
    if (value.match(/[^0-9]/g)) {
      return;
    }
    if (value && index < 5) {
      otpInputs[index + 1].current.focus();
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(false);
  };

  const handleBackspace = (index: number) => {
    if (index > 0 && !otp[index]) {
      otpInputs[index - 1].current.focus();
    }

    const newOtp = [...otp];
    newOtp[index] = '';
    setOtp(newOtp);
  };

  const handleResend = () => {
    setOtp(['', '', '', '', '', '']);
    setTimer(30);
    setError(false);
  };

  const handleOtpSubmit = async (data: {
    username: string;
    password: string;
  }) => {
    const enteredOtp: string = otp.join('');

    if (enteredOtp === '111111') {
      await AsyncStorage.setItem('username', data.username);
      await AsyncStorage.setItem('password', data.password);

      Alert.alert('Success', 'Login Successful', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ]);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    let intervalId: any;

    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  useEffect(() => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 6) {
      handleOtpSubmit(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otp]);

  return (
    <View style={styles.container}>
      <View style={styles.otpCount}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={[
              styles.input,
              {
                borderColor: error ? COLORS.RED : COLORS.BLACK,
              },
            ]}
            maxLength={1}
            value={value}
            onChangeText={newValue => handleOtpChange(newValue, index)}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(index);
              }
            }}
            ref={otpInputs[index]}
            inputMode="numeric"
            keyboardType="number-pad"
          />
        ))}
      </View>
      {error && <Text style={{color: COLORS.RED}}>Invalid OTP</Text>}
      {timer !== 0 && (
        <Text style={styles.text}>Resend in {timer} seconds</Text>
      )}
      <Button
        style={styles.buttonResend}
        title="Resend Code"
        onPress={handleResend}
        disabled={timer > 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
  },
  otpCount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.BLACK,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 40,
    height: 40,
    textAlign: 'center',
    marginRight: 10,
    color: COLORS.BLACK,
  },
  buttonResend: {
    padding: 10,
  },
});

export default OTPForm;
