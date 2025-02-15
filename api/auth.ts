
import {getSecureStore} from "@/utils/secureStore";
import axios from "@/api/axios";
import {Profile} from "@/types";

interface RequestUser {
    email: string;
    password: string
}

async function postSignup(body: RequestUser): Promise<void> {
    const {data} = await axios.post('http://localhost:3030/auth/signup', body);
    return data;
}


async function postLogin(body: RequestUser): Promise<{ accessToken: string }> {
    const {data} = await axios.post('http://localhost:3030/auth/signin', body);
    return data;
}

async function getMe(): Promise<Profile> {
    const accessToken = await getSecureStore('accessToken');
    const {data} = await axios.get('http://localhost:3030/auth/me', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    return data;
}

export {postSignup, postLogin, getMe}
