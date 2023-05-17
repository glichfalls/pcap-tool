<template>
  <form-kit type="form" :value="data" submit-label="Save" @submit="submit">
    <form-kit type="text" name="ports" label="Ports" />
    <form-kit type="text" name="vlans" label="VLANs" />
  </form-kit>
</template>

<script setup lang="ts">

const { updateFilter } = usePacketBroker();

const props = defineProps<{
  data: {
    ports: string;
    vlans: string;
  }
}>();

const submit = (data) => {
  console.log(data);
};

</script>