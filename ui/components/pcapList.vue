<template>
  <div class="list">
      <div v-for="item in list" class="item" @click="() => download(item)">
          {{ item }}
      </div>
  </div>
</template>

<script setup lang="ts">

import { useRuntimeConfig } from '#app';

const { listRecordings } = useNbox();

const recordings = ref('');

const list = computed(() => {
  return recordings.value
    .split("\n")
    .filter((item: string) => item.endsWith('.pcap'));
});

const download = (fileName: string) => {
  const { public: { apiUrl } } = useRuntimeConfig();
  const name = fileName.replace('.pcap', '');
  window.open(`${apiUrl}/api/recording/download/${name}`);
};

const interval = setInterval(async () => {
  recordings.value = await listRecordings();
}, 5000);

onBeforeUnmount(() => {
  clearInterval(interval);
});

</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-flow: column;
  gap: 8px;
}
.item {
  cursor: pointer;
  padding-left: 4px;
}
</style>