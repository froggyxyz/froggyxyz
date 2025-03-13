<script lang="ts" setup>
const [, , isOpen] = useFrogModal();

watch(isOpen, (value) => {
    if (value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.removeProperty('overflow');
    }
});

useLocaleHead();
useHead({
    title: 'FROGGY',
    meta: [{ property: '' }],
    link: [{ rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' }],
});
</script>

<template>
    <div style="height: 100vh">
        <FrogModal />
        <div class="page">
            <WidgetHeader />
            <main>
                <h1>Froggy</h1>
                <h2>{{ $t('title') }}</h2>
                <p>frontend-dev</p>
                <WidgetProjectsList />
            </main>
            <WidgetFooter />
        </div>
    </div>
</template>

<style lang="scss">
@import 'assets/styles/index';
</style>

<style lang="scss" scoped>
.page {
    height: 100vh;

    main {
        padding: 200px 64px 200px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
            text-align: center;
            font-size: 128px;
            margin-bottom: 64px;

            @include medias.mobile {
                font-size: 64px;

                margin-bottom: 32px;
            }
        }

        h2 {
            text-align: center;
            font-size: 64px;
            margin-bottom: 48px;

            @include medias.mobile {
                font-size: 32px;

                margin-bottom: 24px;
            }
        }

        p {
            text-align: center;
            font-size: 48px;
            font-weight: 700;

            @include medias.mobile {
                font-size: 24px;
            }
        }
    }
}
</style>
