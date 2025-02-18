import React, {ForwardedRef, forwardRef} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from "react-native";
import {colors} from "@/constants";


interface InputFieldProps extends TextInputProps {
    label?: string;
    variant?: 'filled' | 'standard' | 'outline',
    error?: string;
}

const InputField = ({label, variant = 'filled', error, ...props}: InputFieldProps, ref?: ForwardedRef<TextInput>) => {
    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={[styles.container, styles[variant], Boolean(error) && styles.inputError, Boolean(props.multiline) && styles.multiline]}>
                <TextInput style={styles.input}
                           ref={ref}
                           autoCapitalize={'none'}
                           spellCheck={false}
                           autoCorrect={false}
                           {...props}/>
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 44,
        borderRadius: 8,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    label: {
        fontSize: 12,
        color: colors.GRAY_700,
        marginBottom: 5
    },
    filled: {
        backgroundColor: colors.GRAY_100
    },
    standard: {},
    outline: {},
    input: {
        fontSize: 16,
        padding: 0,
        flex: 1
    },
    inputError: {
        backgroundColor: colors.RED_100
    },
    error: {
        fontSize: 12,
        marginTop: 5,
        color: colors.RED_500
    },
    multiline: {
        alignItems: 'flex-start',
        paddingVertical: 10,
        height: 200
    }

})

export default forwardRef(InputField);
