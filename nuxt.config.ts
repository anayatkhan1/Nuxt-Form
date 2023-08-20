export default defineNuxtConfig({
  colorMode: {
    preference: "dark",
},
  modules: ['@nuxthq/ui', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
        Inter: true,
    },
},
})
