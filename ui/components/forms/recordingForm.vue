<template>
  <div>
    <form-kit type="form" submit-label="Start" @submit="start">
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
      <p v-if="recordingPid !== null">
        Currently Running: {{ recordingPid }}
        <form-kit type="button" label="Stop Recording" @click="stop" />
      </p>
    </div>
</template>

<script setup lang="ts">

const { startRecording, stopRecording } = useNbox();

const recordingPid = ref<string|null>(null);

const start = async (data) => {
  const message = await startRecording(data);
  if (message !== null) {
    recordingPid.value = message;
  } else {
    alert(message);
  }
};

const stop = async () => {
  const message = await stopRecording(recordingPid.value);
  if (message !== null) {
    recordingPid.value = null;
  } else {
    alert(message);
  }
}

</script>