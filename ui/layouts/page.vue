<template>
  <div class="container mx-auto">
    <div class="heartbeat">
        <span v-if="isOnline" class="online">
            API Online
        </span>
        <span v-else class="offline">
            API Offline
        </span>
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">

const { post } = useHttp();
const isOnline = ref<boolean>(false);

const checkHeartbeat = async () => {
  try {
    const response = await post('/api/heartbeat');
    const data = JSON.parse(response);
    isOnline.value = data.status === 'ok';
  } catch (err) {
    isOnline.value = false;
  }
}

checkHeartbeat();

const interval = setInterval(checkHeartbeat, 10_000);

onBeforeUnmount(() => {
  clearInterval(interval);
})

</script>

<style scoped lang="scss">
.heartbeat {
  @apply w-full;
  @apply text-center;
  @apply py-2;
  @apply text-sm font-bold;

  .offline {
    @apply text-red-500;
  }
  .online {
    @apply text-green-500;
  }
}
</style>