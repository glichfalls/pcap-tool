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
            label="Edit Filter"
            @click="showCreateFilterModal = true"
          />
      </div>

      <create-filter-modal
          :show="showCreateFilterModal"
          @modal:close="showCreateFilterModal = false"
      />

  </NuxtLayout>
</template>

<script setup lang="ts">

import CreateFilterModal from '~/components/modal/createFilterModal.vue';

const { startRecording, generateTraffic } = useNbox();

const showCreateFilterModal = ref<boolean>(false);

</script>

<style scoped lang="scss">

.actions {
  @apply w-full;
  @apply flex justify-start gap-4;
}

</style>