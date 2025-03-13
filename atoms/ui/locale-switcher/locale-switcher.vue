<script lang="ts" setup>
const { locale, setLocale } = useI18n();
</script>

<template>
    <div :class="['locale-switcher', locale]">
        <span class="locale-switcher__highlighter"></span>
        <button :class="{ active: locale === 'ru' }" @click="setLocale('ru')">RU</button>
        <button :class="{ active: locale === 'en' }" @click="setLocale('en')">EN</button>
    </div>
</template>

<style lang="scss" scoped src="./_locale-switcher.styles.scss"></style>
