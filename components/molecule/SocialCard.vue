<template>
    <NuxtLink
        v-tilt
        :href="link ?? undefined"
        target="_blank"
        rel="noopener noreferer"
        class="card"
        @click="copy ? handleCopy() : undefined"
    >
        <article>
            <div class="card__inner" :class="{ copy }">
                <div v-if="copy" class="success-copying" :class="{ copied }">
                    <span>Success copied to clipboard!</span>
                </div>
                <Telegram v-if="icon === IconType.Telegram" />
                <Github v-if="icon === IconType.Github" />
                <Vk v-if="icon === IconType.Vk" />
                <Gmail v-if="icon === IconType.Gmail" />
                <Habr v-if="icon === IconType.Habr" />
                <Discord v-if="icon === IconType.Discord" />
                <span>
                    {{ text }}
                    <Copy class="copy-icon" />
                </span>
            </div>
        </article>
    </NuxtLink>
</template>

<script lang="ts" setup>
import Telegram from 'assets/icons/Telegram.vue';
import Github from 'assets/icons/Github.vue';
import Vk from 'assets/icons/Vk.vue';
import Gmail from 'assets/icons/Gmail.vue';
import Habr from 'assets/icons/Habr.vue';
import Discord from 'assets/icons/Discord.vue';
import Copy from 'assets/icons/Copy.vue';
import { IconType } from '~/utils/enums/icon/IconType';

interface ISocialCard {
    link?: string;
    icon: string;
    text: string;
    copy?: string;
}

const props = defineProps<ISocialCard>();
const copied = ref<boolean>(false);

const handleCopy = () => {
    navigator.clipboard.writeText(props.copy ?? '');
    copied.value = true;

    setTimeout(() => {
        copied.value = false;
    }, 3000);
};
</script>

<style lang="scss" scoped>
.card {
    min-height: 200px;
    width: 100%;
    transform-style: preserve-3d;

    article {
        height: 100%;
    }

    &__inner {
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;

        background-color: $white;
        border-radius: 20px;
        border: 1px solid $stroke;
        cursor: pointer;
        transform-style: preserve-3d;
        transform: translateZ(5px);

        transition: border-color 0.5s, box-shadow 0.5s;

        .success-copying {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;

            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $white;
            border-radius: 20px;

            opacity: 0;
            visibility: hidden;

            transition: opacity 0.3s, visibility 0.3s;

            &.copied {
                opacity: 1;
                visibility: visible;
            }

            span {
                font-size: 24px;
                font-weight: 400;
                color: $emerald;
            }
        }

        .copy-icon {
            height: 20px;
            width: 0;

            transition: width 0.2s;
        }

        &.copy {
            &:hover {
                .copy-icon {
                    width: 20px;
                }
            }
        }

        svg,
        span {
            color: $stroke;
            transition: color 0.5s;
        }

        svg {
            width: 48px;
            height: 48px;
        }

        span {
            font-size: 24px;
            font-weight: 400;

            display: flex;
            align-items: center;
            gap: 6px;
            width: fit-content;
        }

        &:hover {
            border-color: $emerald;
            box-shadow: 0 0 30px rgba($emerald, 0.25);

            span,
            svg {
                color: $emerald;
            }
        }
    }
}
</style>
