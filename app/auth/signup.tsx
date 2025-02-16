import React from 'react';
import {StyleSheet, View} from "react-native";
import FixedBottomCTA from "@/components/FixedBottomCTA";
import {FormProvider, useForm} from "react-hook-form";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import PasswordConfirmInput from "@/components/PasswordConfirmInput";
import useAuth from "@/hooks/queries/useAuth";

interface FormValues {
    email: string;
    password: string;
    passwordConfirm: string;
}

const SignupScreen = () => {
    const {signupMutation} = useAuth();
    const signupForm = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        }
    })

    const onSubmit = (formValues: FormValues) => {
        const {email, password} = formValues;
        signupMutation.mutate({email, password})
    }

    return (
        <FormProvider {...signupForm}>
            <View style={styles.container}>
                <EmailInput/>
                <PasswordInput submitBehavior={'submit'}/>
                <PasswordConfirmInput/>
            </View>
            <FixedBottomCTA label={'회원가입 하기'} onPress={signupForm.handleSubmit(onSubmit)}/>
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
export default SignupScreen;
