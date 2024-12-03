# Nuxt Content Twoslash

Reproduce the issue with Nuxt Content Twoslash

## Issue

When using Nuxt Content Twoslash, on dev mode, the code blocks are properly rendered, with twoslash properly resolving context from the nuxt app.

However, on build mode, the code blocks are not properly rendered, with twoslash not resolving context from the nuxt app. The code blocks are rendered as static code blocks

## Preview

Case 1 : Use default provided nuxt context, works fine on build

```vue twoslash
<script setup>
const { $config } = useNuxtApp()  
</script>

<template>
    <div>
        <p>baseURL: {{ $config.content.api.baseURL }}</p>
    </div>
</template>
```

Case 2 : Use custom context, does not work on build

```vue twoslash
<script setup>
const { $pageContext } = useNuxtApp()  
</script>

<template>
    <div>
        <p>context: {{ $pageContext.context.value }}</p>
    </div>
</template>
```