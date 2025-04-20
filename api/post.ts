import axios from "@/api/axios";
import axiosInstance from "@/api/axios";
import {CreatePostDto, Post} from "@/types";

export const creatPost = async (body: CreatePostDto) => {
    const {data} = await axios.post('/posts', body);

    return data
}

export const getPosts = async (page = 1): Promise<Post[]> => {
    const {data} = await axiosInstance.get(`/posts?page=${page}`);

    return data;
}
