<template>
    <Modal size="lg" v-if="show" @close="closeModal">
        <template #header>
            <div class="flex items-center text-lg">
                Change Filter {{ filter?.name }}
            </div>
        </template>
        <template #body>
            <filter-form :data="initialFormState" />
        </template>
    </Modal>
</template>

<script setup lang="ts">
import { Modal } from "flowbite-vue";
import FilterForm from '~/components/forms/filterForm.vue';

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits(['modal:close']);

const { getFilter } = usePacketBroker();

const filter = await getFilter();

const initialFormState = {
    ports: filter?.criteria?.layer4_dst_port?.port || '',
    vlans: filter?.criteria?.vlan?.vlan_id || '',
};

const closeModal = () => {
  emit('modal:close');
}

</script>