<template>
  <div id="app">
    <pagea/>

    --------------------

    <pageb/>

        --------------------
    
    <pagec/>

        --------------------
    
  </div>
</template>

<script>
import pagea from './components/a.vue'
import pageb from './components/b.vue'
import pagec from './components/c.vue'
export default {
  name: 'app',
  components: {
    pagea,
    pageb,
    pagec
  }
}
</script>

<style>

</style>
