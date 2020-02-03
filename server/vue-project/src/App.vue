<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/product">商品情報</router-link>
    <router-view></router-view>
    <p><button v-on:click="increment">UP</button>
    <h1>Count:{{ count }}</h1>
    <button @click="handleClickNaito">内藤哲也</button>
    <button @click="handleClickTanahashi">棚橋弘至</button>
    <p>{{ message }}</p>
    <EditForm />
  </div>
</template>

<script>
import EditForm from '@/components/EditForm.vue'
export default {
  name: 'app',
  components: { EditForm },
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
console.log('aaaaa')
</script>
