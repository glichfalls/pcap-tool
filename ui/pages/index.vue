<template>
  <NuxtLayout name="page">
      <div class="actions">
          <form-kit
            type="button"
            label="Start Recording"
            @click="startRecording"
          />
          <form-kit
            type="button"
            label="Generate Traffic"
            @click="generateTraffic"
          />
      </div>
  </NuxtLayout>
</template>

<script setup lang="ts">

const { startRecording, generateTraffic } = useNbox();

</script>

<style scoped lang="scss">

.actions {
  @apply w-full;
  @apply flex justify-start gap-4;
}

</style>