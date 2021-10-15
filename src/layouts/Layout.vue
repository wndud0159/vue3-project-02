<template>
    <component :is="layout"></component>
</template>

<script>
import DefaultLayout from "./DefaultLayout.vue";
import EmptyLayout from "./EmptyLayout.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import CollbackLayout from "./CollbackLayout.vue";
export default {
    components: {
        DefaultLayout,
        EmptyLayout,
        CollbackLayout,
    },
    setup() {
        const route = useRoute();
        const layout = computed(() => route.meta.layout || "DefaultLayout");

        return {
            layout,
        };
    },
};
</script>

<style></style>
