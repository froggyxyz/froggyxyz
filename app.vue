<template>
    <div class="page container">
        <FrogModal />
        <TemplateHeader />
        <div class="top">
            <Frog />
            <h1><span>froggy</span>.xyz</h1>
        </div>
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
import Frog from 'assets/icons/Frog.vue';
</script>

<style lang="scss" scoped>
.page {
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 40px;

    background-color: $white;

    .top {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;

        svg {
            width: 48px;
            height: 48px;
        }

        h1 {
            font-family: 'Josefin Sans', sans-serif;
            font-size: 64px;
            letter-spacing: 1px;
            font-weight: 700;

            span {
                color: $emerald;
            }
        }
    }
}
</style>
<style lang="scss">
@import 'assets/styles/index';
</style>
