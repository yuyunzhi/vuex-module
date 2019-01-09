<template lang="html">
    <div class="a">
        page a {{$store.state.countA.countA}}

        <button type="button" name="button" @click="add">增加</button>
        <button type="button" name="button" @click="reduce">删减</button>
    </div>
</template>

<script>
    import {mapState,mapActions,mapMutations} from 'vuex'

    export default {

        watch:{
            ...mapState({
                countA: (state) => state.countA.countA
            }),
        },
        methods: {

            ... mapActions('countA', ['add', 'reduce']),
            ... mapMutations ('countA', ['add', 'reduce']),
        },
        mounted(){
            //访问根节点的state.xxx
            //console.log(this.$store.state.xxx);
        }

    }
</script>

<style lang="css">
</style>
