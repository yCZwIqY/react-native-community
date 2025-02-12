import {Tabs} from 'expo-router';
import React from 'react';
import {colors} from "@/constants";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.ORANGE_600,
                headerShown: false,

            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color, focused}) =>
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color}/>
                }}
            />
            <Tabs.Screen
                name="my"
                options={{
                    title: '내 프로필',
                    tabBarIcon: ({color, focused}) => <FontAwesome name={focused ? 'user-circle' : 'user-circle-o'} size={24} color={color}/>
                }}
            />
            <Tabs.Screen
                name="setting"
                options={{
                    title: '설정',
                    tabBarIcon: ({color, focused}) => <Ionicons name={focused ? 'settings': 'settings-outline'} size={24} color={color} />
                }}
            />
        </Tabs>
    );
}
