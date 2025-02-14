import React from 'react';
import {StyleSheet, View} from "react-native";
import FixedBottomCTA from "@/components/FixedBottomCTA";
import {FormProvider, useForm} from "react-hook-form";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";

interface FormValues {
    email: string;
    password: string;
}

const LoginScreen = () => {
    const loginForm = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (formValues) => {
        console.log(formValues)
    }

    return (
        <FormProvider {...loginForm}>
            <View style={styles.container}>
                <EmailInput/>
                <PasswordInput/>
            </View>
            <FixedBottomCTA label={'로그인 하기'} onPress={loginForm.handleSubmit(onSubmit)}/>
        </FormProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        gap: 16
    },
})
export default LoginScreen;
