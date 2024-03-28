import {View, TextInput, StyleSheet, KeyboardTypeOptions} from 'react-native';
import React from 'react';

interface InputFieldProps {
  secureTextEntry?: boolean;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;

  value: string;
  style: object;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  onChangeText,

  value,
  style,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="black"
        textAlignVertical="center"
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={[styles.input, style]}
        onChangeText={onChangeText}
        value={value}
        selectionColor="black"
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    height: 56,
    borderWidth: 0.5,
    borderRadius: 16,
    borderColor: 'lightgrey',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
    color: 'black',
    fontFamily: 'Inter-Regular',
    marginVertical: 12,
  },
  inputContainer: {
    borderBlockColor: 'black',
  },
});
