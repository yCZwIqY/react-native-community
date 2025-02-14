import React from 'react';
import {Controller, RegisterOptions, useFormContext, useWatch} from "react-hook-form";
import InputField from "@/components/InputField";
import {colors} from "@/constants";


interface FormValues {
    passwordConfirm: string;
}

const PasswordConfirmInput = () => {
    const {control} = useFormContext<FormValues>();
    const password = useWatch({control, name: 'password'});

    const rules = {
        validate: (data: string) => {
            if(data !== password) {
                return '비밀번호가 일치하지 않습니다.'
            }
        }
    } as RegisterOptions;

    return (
        <Controller control={control}
                    name='passwordConfirm'
                    rules={rules}
                    render={({field, fieldState}) => {
                        const {value, onChange, ref} = field;
                        const {error} = fieldState;
                        return <InputField label={'비밀번호 확인'}
                                           ref={ref}
                                           placeholder={'비밀번호를 입력해주세요'}
                                           placeholderTextColor={colors.GRAY_500}
                                           value={value}
                                           secureTextEntry
                                           textContentType={'oneTimeCode'}
                                           onChangeText={onChange}
                                           error={error?.message}
                        />
                    }}
        />
    );
};

export default PasswordConfirmInput;
