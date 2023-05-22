<template>
  <form-kit type="form" submit-label="Start" @submit="startRecording">
      <form-kit
        type="text"
        name="size"
        label="Max Size"
        validation="number"
        validation-visibility="live"
        help="Max pcap size in MB"
      />
      <form-kit
        type="text"
        name="duration"
        label="Max duration"
        validation="number"
        validation-visibility="live"
        help="Max duration in seconds"
      />
  </form-kit>
</template>

<script setup lang="ts">

const { startRecording } = useNbox();

</script>