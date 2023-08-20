<template>
    
    <UCard>
        
    <div
        class="sm:px-6 md:px-12 flex flex-row items-center justify-between px-2"
    >
    <NuxtLink
        class="text-2xl font-extrabold text-primary-600 dark:text-primary-400"
        to="/"
        >NUXT FORM
    </NuxtLink>
        <ul class="flex flex-row items-center justify-between space-x-2">
            <li>
                <UButton
                    :icon="!isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'"
                    @click="isDark = !isDark"
                />
            </li>

            <li>
                <UButton>

                    <NuxtLink 
                      to="/"
                    >
                       SIGN IN
                    </NuxtLink>
            </UButton>
            </li>

            <li>
                <UButton>

                    <NuxtLink 
                      to="/profile"
                    >
                       PROFILE
                    </NuxtLink>
            </UButton>
            </li>

            <li>
                <UButton>
                    <NuxtLink 
                      to="/contact"
                    >
                       CONTACT
                    </NuxtLink>
            </UButton>
           </li>
        </ul>
    </div>
</UCard>
    <div>
        <slot />
    </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
});

</script>
