import React from 'react';
import {colors} from "@/constants";
import {Link, Stack} from "expo-router";
import {Feather, Foundation} from "@expo/vector-icons";

const PostLayout = () => {
    return (

        <Stack screenOptions={{
            headerTintColor: colors.BLACK,
            contentStyle: {backgroundColor: colors.WHITE}
        }}>
            <Stack.Screen name={'write'}
                          options={{
                              title: '글쓰기',
                              headerShown: true,
                              headerLeft: () => (
                                  <Link href={'/'} replace>
                                      <Feather name={'arrow-left'} size={28} color={colors.BLACK}/>
                                  </Link>
                              )
                          }}/>
        </Stack>

    );
};

export default PostLayout;
