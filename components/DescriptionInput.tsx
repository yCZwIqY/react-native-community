import React from 'react';
import {Controller, RegisterOptions, useFormContext} from "react-hook-form";
import InputField from "@/components/InputField";
import {colors} from "@/constants";

interface FormValues {
    description: string
}

const DescriptionInput = () => {
    const {control} = useFormContext<FormValues>();
    const rules = {
        validate: (data: string) => {
            if (data.length < 5) {
                return '내용을 5글자 이상 입력해 주세요';
            }
        }
    } as RegisterOptions;
    return (
        <Controller control={control}
                    name='description'
                    rules={rules}
                    render={({field, fieldState}) => {
                        const {value, onChange, ref} = field;
                        const {error} = fieldState;
                        return <InputField ref={ref}
                                           label={'내용'}
                                           placeholder={'내용을 입력해주세요'}
                                           placeholderTextColor={colors.GRAY_500}
                                           value={value}
                                           returnKeyType={'next'}
                                           onChangeText={onChange}
                                           error={error?.message}
                                           multiline
                        />
                    }}

        />
    );
};

export default DescriptionInput;
