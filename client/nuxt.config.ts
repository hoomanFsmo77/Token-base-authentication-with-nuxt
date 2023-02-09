
export default defineNuxtConfig({
    runtimeConfig:{
      baseUrl:process.env.BASE_URL,
        public:{
            baseUrl:process.env.BASE_URL
        }
    },
    build:{
        transpile:['vue-toastification']
    },
    css:['~/assets/style/App.scss'],
    app:{
        rootId:'v-app',
        rootTag:'main',
        head:{
            title:'my website',
            meta: [
                { name: 'viewport', content: 'width=device-width ,initial-scale=1.0' },
                { name: 'description', content: 'welcome to My project' },
                { name: 'keyword', content: 'HTML,CSS,Js developer' },
                { "http-equiv": 'X-UA-Compatible', content: 'ie=edge' },
            ],
            bodyAttrs:{}
        }
    },
    srcDir: './src',
    modules: [
        '@pinia/nuxt','@nuxt/image-edge'
    ],
})
