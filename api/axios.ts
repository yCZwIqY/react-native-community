import axios from "axios";
import {Platform} from "react-native";

const baseUrls = {
    ios: 'http://localhost:3030',
    android: 'http://10.0.2.2:3000'
}

const axiosInstance = axios.create({
    baseURL: baseUrls[Platform.OS] ?? 'http://localhost:3030'
});

export default axiosInstance
