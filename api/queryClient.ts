import {QueryClient} from "@tanstack/query-core";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            staleTime: 20 * 1000
        },
        mutations: {}
    }
});

export default queryClient;
