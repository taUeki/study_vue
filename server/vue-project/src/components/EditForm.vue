<template>
  <div class="edit">
    <input v-model="message">
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  computed: {
    message: {
      get () {
        return this.$store.getters.message
      },
      set (value) {
        this.$store.dispatch('doUpdate', value)
      }
    }
  }
}
</script>
