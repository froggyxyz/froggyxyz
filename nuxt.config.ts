// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: [
        '@nuxtjs/eslint-module',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/i18n',
        'frog-modal',
        '@nuxt/image',
        '@nuxtjs/google-fonts',
    ],
    components: [
        { path: '~/atoms/ui', prefix: 'Ui', extensions: ['.vue'] },
        { path: '~/atoms/icons', prefix: 'Icon' },
        { path: '~/features', prefix: 'Feature', extensions: ['.ts'] },
        { path: '~/widgets', prefix: 'Widget', extensions: ['.vue'] },
        { path: '~/modals', prefix: 'Modal', extensions: ['.vue'] },
    ],
    i18n: {
        locales: [
            { code: 'en', language: 'en-US' },
            { code: 'ru', language: 'ru-RU' },
        ],
        defaultLocale: 'en',
    },
    googleFonts: {
        download: true,
        families: {
            Inter: [400, 500, 600, 700, 800],
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/collection/_medias.scss" as medias;',
                },
            },
        },
    },
});
