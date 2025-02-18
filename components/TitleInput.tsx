import React from 'react';
import {Controller, RegisterOptions, useFormContext} from "react-hook-form";
import InputField from "@/components/InputField";
import {colors} from "@/constants";

interface FormValues {
    title: string
}
const TitleInput = () => {
    const {control} = useFormContext<FormValues>();
    const rules = {
        validate: (data: string) => {
            if (data.length <= 0) {
                return '제목을 입력해 주세요';
            }
        }
    } as RegisterOptions;
    return (
        <Controller control={control}
                    name='title'
                    rules={rules}
                    render={({field, fieldState}) => {
                        const {value, onChange} = field;
                        const {error} = fieldState;
                        return <InputField autoFocus
                                           label={'제목'}
                                           placeholder={'제목을 입력해주세요'}
                                           placeholderTextColor={colors.GRAY_500}
                                           value={value}
                                           returnKeyType={'next'}
                                           onChangeText={onChange}
                                           error={error?.message}
                        />
                    }}

        />
    );
};

export default TitleInput;
