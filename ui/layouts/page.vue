<template>
  <div class="container mx-auto">
    <div class="stats">
        <span v-if="isOnline" class="online">
            API Online
        </span>
        <span v-else class="offline">
            API Offline
        </span>
        <span>
            Pass Rate: {{ passRate }}
        </span>
        <span>
            Stats Time: {{ statsTime }}
        </span>
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns';

const { post } = useHttp();
const { measure } = usePacketBroker();

const isOnline = ref<boolean>(false);
const stats = ref<{
  passRate: number;
  time: number;
}>(null);

const checkHeartbeat = async () => {
  try {
    const data = await post('/api/heartbeat');
    isOnline.value = data.status === 'ok';
  } catch (err) {
    isOnline.value = false;
  }
}

const checkFilterStats = async () => {
  try {
    stats.value = await measure();
  } catch (err) {
    console.error(err);
  }
}

const passRate = computed(() => {
  if (stats.value === null || stats.value.passRate === 0) {
    return '0.0 KB';
  }
  return `${stats.value.passRate / 8e+9} GB`;
});

const statsTime = computed(() => {
  if (stats.value === null || stats.value.time === null) {
    return '-';
  }
  return format(stats.value.time, 'dd.MM.Y hh:mm:ss');
});

checkHeartbeat();
checkFilterStats();

const heartbeatInterval = setInterval(checkHeartbeat, 10_000);
const filterStatsInterval = setInterval(checkFilterStats, 2000);

onBeforeUnmount(() => {
  clearInterval(heartbeatInterval);
  clearInterval(filterStatsInterval);
})

</script>

<style scoped lang="scss">
.stats {
  @apply w-full;
  @apply text-center;
  @apply py-2;
  @apply text-sm font-bold;
  @apply flex justify-center gap-4;

  .offline {
    @apply text-red-500;
  }
  .online {
    @apply text-green-500;
  }
}
</style>