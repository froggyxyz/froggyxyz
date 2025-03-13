<script lang="ts" setup>
import type { IButtonProps } from './button.types';

const props = defineProps<IButtonProps>();

const getElementType = () => (props.href ? 'a' : 'button');
</script>

<template>
    <component :is="getElementType()" class="button" :href="href" target="_blank">
        <div class="button__highlighter"></div>
        <span class="button__content">
            <slot />
        </span>
    </component>
</template>

<style lang="scss" scoped src="./button.styles.scss"></style>
