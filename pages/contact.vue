<template>
    <div class="flex flex-row items-start justify-center p-4" >
        <div class=" flex-col items-start justify-center px-9">
                
                <!---Contact Form -->
                <div class="m-3 text-4xl indent-4 font-extrabold text-gray-900 dark:text-gray-200">
                    <h1 class="font-extrabold px-12 ml-11 dark:text-gray-200 text-gray-900">Contact sales</h1>
                    <div class="mt-2 ml-2">
                    <p class="text-sm dark:text-gray-400 text-gray-500 tracking-normal">Aute magna irure deserunt veniam aliqua magna enim voluptate </p>
                    </div>
                </div>

                <div class="ml-6 pt-2">
                    <div class="flex  ml-3 mt-3 gap-x-8">
                        <UFormGroup label="First name" >
                                <UInput
                                    name="user-first-name"
                                    type="text"
                                    size="lg"
                                />
                        </UFormGroup>

                        <UFormGroup label="Last name" >
                                <UInput
                                    name="user-last-name"
                                    type="text"
                                    size="lg"
                                />
                        </UFormGroup>
                    </div>
                    <div class="mt-3 ml-3 pt-3">
                        <UFormGroup label="Company">
                            <UInput
                                name="user-company"
                                type="text"
                                size="lg"
                                
                            />
                        </UFormGroup>
                    </div>
                    <div class="mt-3 ml-3 pt-3">
                        <UFormGroup label="Email">
                            <UInput
                                name="user-company"
                                type="email"
                                size="lg"
                            />
                        </UFormGroup>
                    </div>
                    <div class="mt-3 ml-3 pt-3">
                        <UFormGroup label="Phone number">
                            <UInput
                                name="user-phone"
                                size="lg"
                            />
                        </UFormGroup>
                    </div>

                    <div class="mt-3 ml-3 pt-3">
                        <UFormGroup label="Message">
                            <UTextarea 
                                name="user-message"
                               :rows="4"
                            />
                        </UFormGroup>

                    </div>

                    <div class="mt-3 ml-3 pt-3 flex">
                            <UToggle
                                v-model="selected"
                            />
                        <div>
                            <p class="text-sm dark:text-gray-400 text-gray-600 px-4">By selecting this, you agree to our <span class="dark:text-primary-400 text-primary-600 font-semibold">privacy policy</span></p>
                        </div>
                    </div>

                    <div class="mt-9 ml-2">
                        <UButton
                            name="user-submit"
                            size="md"
                            block
                            color="primary"
                            label="Let's talk"
                            variant="solid" 
                        />
                    </div>
                </div>
        </div>
        
    </div>
</template>
<script setup lang="ts">
const selected = ref(false)
const countriesList = [
    "US",
    "CA",
    "UK",
    "IND",
    "UAE",
    "SA",
    "MX"
];
const country = ref(countriesList[0]);

</script>

<style>
html {

    font-family: "Inter", sans-serif;
    
}
</style>
