import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  StyleSheet,
} from 'react-native';
import {Controller} from 'react-hook-form';

import COLORS from 'constants/colors';

type TextInputProps = {
  name: string;
  control: any;
  error?: string;
  label: string;
  placeholder: string;
  isPassword?: boolean;
  keyboardType?: KeyboardTypeOptions;
  children?: React.ReactNode;
};

const TextInputField: React.FC<TextInputProps> = ({
  name,
  control,
  error,
  label,
  placeholder,
  isPassword = false,
  keyboardType = 'default',
  children,
}): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Controller
          name={name}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={COLORS.BLACK}
              secureTextEntry={isPassword}
              keyboardType={keyboardType as KeyboardTypeOptions}
              style={styles.textInput}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {children}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 8,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: COLORS.BLACK,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 22,
  },
  textInput: {
    width: '100%',
    color: COLORS.BLACK,
  },
  error: {
    color: 'red',
  },
});

export default TextInputField;
