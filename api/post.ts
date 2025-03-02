import axios from "@/api/axios";
import {CreatePostDto} from "@/types";

export const creatPost = async (body: CreatePostDto) => {
    const {data} =await axios.post('/posts', body);

    return data
}
