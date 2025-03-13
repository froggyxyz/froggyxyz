<script lang="ts" setup>
const { locale } = useI18n();
</script>

<template>
    <footer class="footer">
        <NuxtLink href="https://t.me/froggyxyz" target="_blank">
            <IconTelegram />
        </NuxtLink>
        <NuxtLink href="https://www.linkedin.com/in/slava-ikonnikov-0a8544335/" target="_blank">
            <IconLinkedin />
        </NuxtLink>
        <NuxtLink href="https://github.com/froggyxyz" target="_blank">
            <IconGithub />
        </NuxtLink>
        <NuxtLink
            class="square-link"
            style="text-transform: lowercase"
            href="https://barnaul.hh.ru/applicant/resumes?hhtmFrom=main&hhtmFromLabel=header"
            target="_blank"
            >hh
        </NuxtLink>
        <NuxtLink :href="`/CV-Ikonnikov-Slava-${locale}.pdf`" download target="_blank" class="square-link">CV</NuxtLink>
    </footer>
</template>

<style lang="scss" scoped src="./_footer.styles.scss"></style>
