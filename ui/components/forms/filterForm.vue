<template>
  <form-kit type="form" v-model="filter" submit-label="Save" @submit="updateFilter">
    <form-kit
      type="text"
      name="ports"
      label="Ports"
      validation="ports"
      validation-visibility="live"
      help="List of Ports (comma separated, ranges - separated)"
    />
    <form-kit
      type="text"
      name="vlan"
      label="VLAN"
      validation="vlan"
      validation-visibility="live"
      help="List of VLAN ids (comma separated, ranges - separated)"
    />
    <form-kit
      type="textarea"
      rows="20"
      name="ips"
      label="IP Addresses"
      validation="ips"
      validation-visibility="live"
      help="List of IP v4 Addresses or CIDR notations (comma separated, ranges - separated)"
    />
  </form-kit>
</template>

<script setup lang="ts">

const { filter, updateFilter } = usePacketBroker();

</script>