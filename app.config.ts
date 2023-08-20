export default defineAppConfig({
    ui: {
        primary: "sky",
        gray: "slate",
        container: {
            constrained: "max-w-7xl",
        },
        card: {
            rounded: "rounded-none",
            background: "bg-gray-100 dark:bg-black",
            
        },
        input: {
            rounded: "rounded-none",
            
            
            
        },
        textarea: {
            rounded: "rounded-none",
        },
        notifications: {
            position: "top-0 right-0",
            rounded: "rounded-none",
        },
        slideover: {
            background: "bg-gray-200 dark:bg-gray-900",
            rounded: "rounded-none",
        },
        button: {
            default: {
                rounded: "rounded-2xl",
                color: 'gray',
                variant: 'ghost'

            }
            
        },
        verticalNavigation: {
            padding: "px-2 py-1.5",
            rounded: "rounded-none",
        },
        tabs: {
            list: {
                background: "bg-gray-200 dark:bg-gray-600",
                rounded: "rounded-none",
                marker: {
                    rounded: "rounded-none",
                },
            },
        },
        select: {
            rounded: "rounded-none",
        },
        selectMenu: {
            rounded: "rounded-none",
        },
        alert: {
            rounded: "rounded-none",
        },
    },
});
