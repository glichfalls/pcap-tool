<template>
  <NuxtLayout name="page">
      <div class="actions">
          <form-kit
            type="button"
            label="Generate Traffic"
            @click="generateTraffic"
          />
          <form-kit
            type="button"
            label="Reload Filter"
            @click="reloadFilter"
          />
      </div>
      <div class="flex justify-between gap-4">
          <div class="rounded-md border border-gray-300 bg-white p-4 w-1/4">
              <h2 class="text-lg font-bold mb-2">
                  Edit Filter {{ filter?.name }}
              </h2>
              <filter-form v-if="filter" />
          </div>
          <div class="rounded-md border border-gray-300 bg-white p-4 w-3/4">
              <h2 class="text-lg font-bold mb-2">
                  Downloads
              </h2>
          </div>
      </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import FilterForm from '~/components/forms/filterForm.vue';

const { generateTraffic } = useNbox();
const { filter, reloadFilter } = usePacketBroker();

await reloadFilter();

</script>

<style scoped lang="scss">

.actions {
  @apply w-full;
  @apply flex justify-start gap-4;
}

</style>