import React from 'react';
import {Link, Stack} from "expo-router";
import {Foundation} from "@expo/vector-icons";
import {colors} from "@/constants";

const AuthLayout = () => {
    return (
        <Stack screenOptions={{
            headerTintColor: colors.BLACK,
            contentStyle: {backgroundColor: 'white'}
        }}>
            <Stack.Screen name={'index'}
                          options={{
                              title: '로그인',
                              headerShown: true,
                              headerLeft: () => <Link href={'/'} replac style={{paddingRight: 5}}>
                                  <Foundation name={'home'} size={28} color={'black'}/>
                              </Link>
                          }}/>
            <Stack.Screen name={'login'}
                          options={{
                              title: '이메일 로그인',
                              headerShown: true
                          }}/>
        </Stack>
    );
};

export default AuthLayout;
