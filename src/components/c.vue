<template lang="html">
  <div class="c">
    page c  {{$store.state.countC.countC}}

    <button type="button" name="button" @click="add(number)">增加{{number}}</button>
    <button type="button" name="button" @click="reduce(number)">删减{{number}}</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      number: 3,
    }
  },
  methods: mapActions('countC',['add','reduce'])
}
</script>

<style lang="css">
</style>
