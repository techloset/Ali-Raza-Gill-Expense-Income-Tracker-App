import {
    View,
    Text,
    TextInput,
    StyleSheet,
    KeyboardTypeOptions,
} from 'react-native';
import React from 'react';

interface InputFieldProps {
    secureTextEntry?: boolean;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
}

const InputField: React.FC<InputFieldProps> = ({
    placeholder,
    secureTextEntry = false,
    keyboardType,
}) => {
    return (
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                style={styles.input}
            />
    );
};

export default InputField;

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.5,
        borderRadius: 16,
        borderColor: 'lightgrey',
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        fontWeight:'400',
        marginBottom: 5,
        color: 'black',
        fontFamily: 'Inter-Light',
        marginVertical:12
    },
});
