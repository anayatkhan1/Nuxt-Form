<template>
    <div class="py-12" >
        <div class="py-12 flex flex-row items-start justify-start px-16">
                
                <!---Profile Form -->
                <div class="m-3 text-2xl text-gray-900 dark:text-gray-200">
                    <h1 class="font-extrabold dark:text-gray-200 text-gray-900">Profile</h1>
                    <div class="mt-2 ">
                    <p class="text-sm dark:text-gray-400 text-gray-400">This information will be displayed publicly so be careful what you share</p>
                    </div>
                </div>

                <div class="ml-6 pt-2">
                    <div class="ml-3 mt-3">
                        <UFormGroup label="Website" >
                                <UInput
                                    name="user-website"
                                    type="text"
                                    size="lg"
                                    placeholder="https://www.example.com"
                                />
                        </UFormGroup>

                    </div>
                    <div class="mt-3 ml-3 pt-3">
                        <UFormGroup label="About">
                            <UTextarea
                                name="user-about"
                                type="text"
                                :rows="4"
                            />
                        </UFormGroup>
                        <p class="mt-2 text-sm dark:text-gray-400 text-gray-400">Write a few sentences about yourself</p>
                    </div>
                    <div class="ml-3 pt-6 flex">
                        <div>
                            <UFormGroup label="Photo" >
                                    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
                            </UFormGroup>
                        </div>
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
