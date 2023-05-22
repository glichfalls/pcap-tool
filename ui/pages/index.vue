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
        <div class="flex items-start justify-between gap-4">
            <div class="box w-1/4">
                <h2 class="box-title">
                    Edit Filter {{ filter?.name }}
                </h2>
                <filter-form v-if="filter" />
            </div>
            <div class="box w-1/4">
                <h2 class="box-title">
                    Start Recording
                </h2>
                <recording-form />
            </div>
            <div class="box w-2/4">
                <h2 class="box-title">
                    Downloads
                </h2>
                <pcap-list />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import FilterForm from '~/components/forms/filterForm.vue';
import RecordingForm from '~/components/forms/recordingForm.vue';
import PcapList from '~/components/pcapList.vue';

const { generateTraffic } = useNbox();
const { filter, reloadFilter } = usePacketBroker();

await reloadFilter();

</script>

<style scoped lang="scss">

.actions {
  @apply w-full;
  @apply flex justify-start gap-4;
}

.box {
  @apply rounded-md border border-gray-300;
  @apply bg-white;
  @apply p-4;
}

.box-title {
  @apply text-lg font-bold mb-2;
}

</style>