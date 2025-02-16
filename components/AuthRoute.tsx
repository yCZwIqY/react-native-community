import React, {ReactNode} from 'react';
import useAuth from "@/hooks/queries/useAuth";
import {router, useFocusEffect} from "expo-router";
import {View} from "react-native";

interface AuthRouteProps {
    children: ReactNode
}
const AuthRoute = ({children}: AuthRouteProps) => {
    const {auth} = useAuth();

    useFocusEffect(() => {
        !auth.id && router.replace('/auth')
    });

    return <>{children}</>
};

export default AuthRoute;
