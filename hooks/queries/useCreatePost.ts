import {useMutation} from "@tanstack/react-query";
import {creatPost} from "@/api/post";
import {router} from "expo-router";
import queryClient from "@/api/queryClient";
import {queryKey} from "@/constants";

const useCreatePost =() => {
    return useMutation({
        mutationFn: creatPost,
        onSuccess: () => {
            router.replace('/');
            queryClient.invalidateQueries({queryKey: [queryKey.POST, queryKey.GET_POSTS]})
        }
    })
}

export default useCreatePost;
