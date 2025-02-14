import React from 'react';
import {Controller, RegisterOptions, useFormContext} from "react-hook-form";
import InputField from "@/components/InputField";
import {colors} from "@/constants";
import {TextInputProps} from "react-native";


interface FormValues {
    password: string;
}

interface PasswordInputProps {
    submitBehavior?: TextInputProps['submitBehavior']
}

const PasswordInput = ({submitBehavior = 'blurAndSubmit'}: PasswordInputProps) => {
    const {control, setFocus} = useFormContext<FormValues>();

    const rules = {
        validate: (data: string) => {
            if (data.length <= 0) {
                return '비밀번호를 입력해 주세요';
            }
            if (data.length < 8) {
                return '비밀번호는 8자 이상 입력해주세요.'
            }
        }
    } as RegisterOptions;

    return (
        <Controller control={control}
                    name='password'
                    rules={rules}
                    render={({field, fieldState}) => {
                        const {value, onChange, ref} = field;
                        const {error} = fieldState;
                        return <InputField label={'비밀번호'}
                                           ref={ref}
                                           placeholder={'비밀번호를 입력해주세요'}
                                           placeholderTextColor={colors.GRAY_500}
                                           value={value}
                                           secureTextEntry
                                           textContentType={'oneTimeCode'}
                                           returnKeyType={submitBehavior === 'submit' ? 'next' : 'done'}
                                           submitBehavior={submitBehavior}
                                           onSubmitEditing={() => setFocus('passwordConfirm')}
                                           onChangeText={onChange}
                                           error={error?.message}
                        />
                    }}
        />
    );
};

export default PasswordInput;
