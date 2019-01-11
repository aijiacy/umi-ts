// ref: https://umijs.org/config/
export default {
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: {
                immer: true
            },
            dynamicImport: true,
            title: 'evo-cloud',
            dll: false,
            hardSource: false,
            routes: {
                exclude: [
                    /components/,
                ],
            },
        }],
    ]
    // ,
    // proxy: {
    //     "/remote/api": {
    //         "target": "http://localhost:8000/",
    //         "changeOrigin": true,
    //         "pathRewrite": { "^/remote": "" }
    //     }
    // }
}
