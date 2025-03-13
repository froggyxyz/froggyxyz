<script lang="ts" setup>
const [, close] = useFrogModal();
</script>

<template>
    <div class="base-modal">
        <button class="base-modal__close" @click="close">
            <IconCross />
        </button>
        <slot />
    </div>
</template>

<style lang="scss" scoped src="./base.styles.scss"></style>
