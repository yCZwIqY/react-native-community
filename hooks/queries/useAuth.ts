import {useMutation, useQuery} from "@tanstack/react-query";
import {getMe, postLogin, postSignup} from "@/api/auth";
import {router} from "expo-router";
import {deleteSecureStore, getSecureStore, saveSecureStore} from "@/utils/secureStore";
import {removeHeader, setHeader} from "@/utils/header";
import queryClient from "@/api/queryClient";
import {useEffect} from "react";

function useSignup() {
    return useMutation({
        mutationFn: postSignup,
        onSuccess: () => router.replace('/auth/login'),
        onError: (e) => {
        },
    });
}

function useLogin() {
    return useMutation({
        mutationFn: postLogin,
        onSuccess: async ({accessToken}) => {
            setHeader('Authorization', accessToken)
            await saveSecureStore('accessToken', accessToken);
            queryClient.fetchQuery({queryKey: ['auth', 'getMe']});
            router.replace('/')
        },
        onError: () => {
        },
    })
}

function useGetMe() {
    const {data, isError, isSuccess} = useQuery({
        queryFn: getMe,
        queryKey: ['auth', 'getMe'],

    });

    useEffect(() => {
        if (isError) {
            removeHeader('Authorization');
            deleteSecureStore('accessToken');
        }

    }, [isError]);

    useEffect(() => {
        (async () => {
            const accessToken = await getSecureStore('accessToken');
            setHeader('Authorization', `Bearer ${accessToken}`);
        })()

    }, [isSuccess]);

    return {data}
}

function useAuth() {
    const loginMutation = useLogin();
    const signupMutation = useSignup()
    const {data} = useGetMe();

    const logout = () => {
        removeHeader('Authorization');
        deleteSecureStore('accessToken');
        queryClient.resetQueries({queryKey: ['auth']});
    }

    return {auth: {id: data?.id, nickname: data?.nickname}, loginMutation, signupMutation, logout}
}

export default useAuth;
