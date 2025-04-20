import {useInfiniteQuery} from "@tanstack/react-query";
import {getPosts} from "@/api/post";
import {queryKey} from "@/constants";

const useGetInfinitePost = () => {
    return useInfiniteQuery({
        queryKey: [queryKey.POST, queryKey.GET_POSTS],
        queryFn: ({pageParam}) => getPosts(pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const lastPost = lastPage[lastPage.length - 1];
            return lastPost ? allPages.length + 1 : undefined;
        }
    })
}

export default useGetInfinitePost;
