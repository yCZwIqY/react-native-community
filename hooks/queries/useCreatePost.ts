import {useMutation} from "@tanstack/react-query";
import {creatPost} from "@/api/post";
import {router} from "expo-router";

const useCreatePost =() => {
    return useMutation({
        mutationFn: creatPost,
        onSuccess: () => {
            router.replace('/');
        }
    })
}

export default useCreatePost;
