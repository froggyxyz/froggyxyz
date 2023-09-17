<template>
    <main class="content">
        <div class="list">
            <MoleculeSocialCard
                v-for="social in socials"
                :key="`social-${social.icon}`"
                :link="social.link ?? ''"
                :icon="social.icon"
                :text="social.text"
                :copy="social.copy ?? ''"
            />
        </div>
    </main>
</template>

<script lang="ts" setup>
import { IconType } from '~/utils/enums/icon/IconType';

const socials = ref([
    { text: '@froggyxyz', icon: IconType.Telegram, link: 'https://t.me/froggyxyz' },
    { text: '/froggyxyz', icon: IconType.Github, link: 'https://github.com/froggyxyz' },
    { text: '/froggyxyz', icon: IconType.Vk, link: 'https://vk.com/froggyxyz' },
    { text: 'froggyxyzz@gmail.com', icon: IconType.Gmail, link: 'mailto:froggyxyzz@gmail.com' },
    { text: '@froggyxyz', icon: IconType.Habr, link: 'https://habr.com/ru/users/froggyxyz/' },
    { text: '@froggyxyz', icon: IconType.Discord, copy: 'froggyxyz' },
]);
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
}

.list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}
</style>
