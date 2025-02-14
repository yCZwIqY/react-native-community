import React from 'react';
import {Controller, RegisterOptions, useFormContext} from "react-hook-form";
import InputField from "@/components/InputField";
import {colors} from "@/constants";

interface FormValues {
    email: string;
}

const EmailInput = () => {
    const {control, setFocus} = useFormContext<FormValues>();
    const rules = {
        validate: (data: string) => {
            if (data.length <= 0) {
                return '이메일을 입력해 주세요';
            }
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
                return '올바른 이메일 형식이 아닙니다.'
            }
        }
    } as RegisterOptions;
    return (
        <Controller control={control}
                    name='email'
                    rules={rules}
                    render={({field, fieldState}) => {
                        const {value, onChange} = field;
                        const {error} = fieldState;
                        return <InputField autoFocus
                                           label={'이메일'}
                                           placeholder={'이메일을 입력해주세요'}
                                           placeholderTextColor={colors.GRAY_500}
                                           value={value}
                                           inputMode={'email'}
                                           returnKeyType={'next'}
                                           submitBehavior={'submit'}
                                           onSubmitEditing={() => setFocus("password")}
                                           onChangeText={onChange}
                                           error={error?.message}
                        />
                    }}

        />
    );
};

export default EmailInput;
