<template>
    <ul>
       <li v-for="(user, key) in users" :key="key">{{ user.name }} ({{ user.email }})</li>
    </ul>
</template>

<script>
export default {
  computed: {
    users: function () {
      return this.$store.getters.users
    }
  }
}
</script>
