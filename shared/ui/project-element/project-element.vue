<script lang="ts" setup>
import type { IProjectElementProps } from './project-element.types';
import ModalContent from '~/modals/content/content.vue';

defineProps<IProjectElementProps>();
const [open] = useFrogModal();
</script>

<template>
    <div class="project-element">
        <div class="project-element__preview" @click="open(ModalContent, { preview: img, stack, project, href })">
            <NuxtImg :src="img" />
        </div>
        <p @click="open(ModalContent, { preview: img, stack, project, href })">{{ $t(`projects.${project}`) }}</p>
    </div>
</template>

<style lang="scss" scoped src="./project-element.styles.scss"></style>
