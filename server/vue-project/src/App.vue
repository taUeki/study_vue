<template>
  <div id="app">
    <p><button v-on:click="increment">UP</button>
    <h1>Count:{{ count }}</h1>
    <button @click="handleClickNaito">内藤哲也</button>
    <button @click="handleClickTanahashi">棚橋弘至</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    increment: function () {
      this.$store.commit('increment', 3)
    },
    handleClickNaito: function () {
      alert('トランキーロ！！焦んなよ！！！')
    },
    handleClickTanahashi: function () {
      alert('愛してまーす！！！')
    }
  },
  computed: {
    message () {
      return this.$store.getters.message
    },
    count () {
      return this.$store.getters.count
    },
    list: function () {
      return this.$store.state.list
    }
  }
}
</script>
