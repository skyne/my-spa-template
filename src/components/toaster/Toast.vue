<template>
  <div
    class="message alert"
    :class="messageClass"
  >
    <button
      type="button"
      className="close"
      @click="onClose"
    >
      &times;
    </button>
    <div class="inner-message">
      {{ message }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    'message': { type: String, required: true },
    'type': { type: String, required: true },
    'onClose': { type: Function, required: true }
  },
  computed: {
    messageClass() {
      return 'alert-' + this.$props.type;
    }
  }
};
</script>
