<template>
    <header class="header">
        <nav>
            <NuxtLink>Socials</NuxtLink>
            <NuxtLink>Skills</NuxtLink>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.header {
    padding: 20px 0;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    nav {
        display: flex;
        align-items: center;
        gap: 30px;

        font-size: 24px;

        a {
            transition: color 0.2s;

            &:hover {
                color: $emerald;
            }
        }
    }
}
</style>
