// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript:{
  strict:false
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  ssr: false,
  modules:[
    '@nuxtjs/eslint-module',
    'nuxt-vuefire',
    'nuxt-icon'
  ],
  vuefire: {
    auth: true, // enable Firebase Authentication
    config: {
      // replace with your own credentials from the Firebase console
      apiKey: 'AIzaSyDnWkqpb9wteYFRtMIDNkPtv1wYBmsgIW4',
      authDomain: 'citysights-302f3.firebaseapp.com',
      projectId: 'citysights-302f3',
      appId: '1:156996239720:web:215ffcd2e8743fbef7d6dd',
    },
  },
  extends: [
    '@nuxt-awesome/theme',
  ],
  
})
