<script lang="ts" setup>
import type { IModalContentProps } from './content.types';

defineProps<IModalContentProps>();
</script>

<template>
    <ModalBase>
        <div class="modal-content">
            <NuxtImg :src="preview" preload />
            <h2>{{ $t(`projects.${project}`) }}</h2>
            <div class="modal-content__stack">
                <b>{{ $t('stack') }}:</b>
                <p>{{ stack }}</p>
            </div>
            <p v-html="$t(`descriptions.${project}`)"></p>
            <UiButton v-if="href" :href="href">{{ $t('check') }}</UiButton>
        </div>
    </ModalBase>
</template>

<style lang="scss" scoped src="./content.styles.scss"></style>
