// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
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
        { path: '~/shared/ui', prefix: 'Ui', extensions: ['.vue'] },
        { path: '~/shared/icons', prefix: 'Icon' },
        { path: '~/features', prefix: 'Feature', extensions: ['.ts'] },
        { path: '~/widgets', prefix: 'Widget', extensions: ['.vue'] },
        { path: '~/modals', prefix: 'Modal', extensions: ['.vue'] },
    ],
    i18n: {
        locales: [
            { code: 'en', language: 'en-US' },
            { code: 'ru', language: 'ru-RU' },
        ],
        defaultLocale: 'ru',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_locale',
            redirectOn: 'root',
        },
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
                    quietDeps: true,
                    api: 'modern',
                    additionalData: '@import "@/assets/styles/collection/index.scss";',
                },
            },
        },
    },
});
