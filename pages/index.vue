<template>
    <div class="flex flex-row items-start justify-between p-5" >
        <div class="ml-7 flex-col items-start justify-normal p-28">
                <img
                    src="/images/tailwind.png"
                    alt="tailwind"
                    class=" px-4 h-8 w-auto"
                />
                <!---Sign in Form -->
                <div class="m-3 text-5xl indent-4 font-extrabold text-gray-900 dark:text-gray-200">
                    <h1 class="tracking-normal">Sign in to your account</h1>
                    <div class="mt-3 ml-1">
                        <p class="text-sm dark:text-gray-400 tracking-normal">Not a member ? <span class="dark:text-primary-400 text-primary-600"> Start a 14 day free trial</span></p>
                    </div>
                </div>

                <div class="ml-6 pt-4">
                    <div class="ml-3 mt-3">
                        <UFormGroup c label="Email address" >
                                <UInput
                                    name="user-email"
                                    type="email"
                                    icon="i-heroicons-inbox-20-solid"
                                    size="lg"
                                    placeholder="Enter email address"
                                />
                        </UFormGroup>
                    </div>
                    <div class="mt-3 ml-3 pt-3">
                        <UFormGroup label="Password">
                            <UInput
                                name="user-password"
                                type="password"
                                size="lg"
                                placeholder="Enter password"
                            />
                        </UFormGroup>
                    </div>
                    <div class="flex items-start justify-between ml-3  mt-5 text-sm">
                        <UCheckbox 
                        name="user-checkbox" 
                        label="Remember me" 
                        />
                            <UButton
                                name="user-forgot-password"
                                size="md"
                                :padded="false"
                                to="/"
                                color="primary"
                                label="Forgot password?"
                                variant="link"
                                
                            />
                    </div>
                    <div class="mt-5 px-1">
                        <UButton
                            name="user-signin"
                            size="md"
                            block
                            color="primary"
                            label="Sign in"
                            variant="solid" 
                        />
                    </div>

                    <div class="p-7 flex flex-col items-center justify-center gap-x-9">
                        <div class="p-5 text-lg dark:text-gray-200 text-gray-900">Or continue with</div>
                        <div class="flex items-start justify-center gap-x-6">
                        <UButton
                            name="user-signin"
                            size="lg"
                            icon="i-heroicons-academic-cap-20-solid"
                            color="sky"
                            label="Twitter"
                            variant="solid" 
                        />
                        <UButton
                            name="user-signin"
                            size="lg"
                            icon="i-heroicons-academic-cap-20-solid"
                            color="black"
                            label="Github"
                            variant="solid" 
                        />
                    </div>
                    </div>
                    
                </div>
               
        </div>
        
        <div class="mt-7">
            <img
                src="/images/camera.png"
                alt="camera"
                 class="lg:aspect-[5.1/6.1] lg:w-[31.5rem] max-w-none rounded-2xl object-cover object-left md:aspect-[5/3] md:w-[32.8rem] md:ml-2 w-[20rem]" />
        </div>
    </div>
</template>
<script setup lang="ts">

</script>

<style>
html {

    font-family: "Inter", sans-serif;
    
}
</style>
