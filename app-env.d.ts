declare module '#app' {
    interface NuxtApp {
        $pageContext: {
            context: ComputedRef<Record<string, any>>
            setContext: (key: string, value: any) => void
            clearContext: () => void
        }
    }
}