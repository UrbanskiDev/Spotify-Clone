import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '59f860b57fmsh11a43748f9d520ap15bbadjsne6c5c4fce2fc')

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
    })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;