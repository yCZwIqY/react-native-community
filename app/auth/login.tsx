import React from 'react';
import {StyleSheet, View} from "react-native";
import InputField from "@/components/InputField";
import {colors} from "@/constants";

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <InputField label={'이메일'}
                        placeholder={'이메일을 입력해주세요'}
                        placeholderTextColor={colors.GRAY_500}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    }
})
export default LoginScreen;
