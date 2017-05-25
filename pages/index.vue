<template>
    <div>
        <div id="graphDiv">

        </div>
        <form>
            <input type="text" v-model="text">
            <button type="submit" @click.prevent="calculate">Посчитать</button>
        </form>

    </div>
</template>

<script>
  import huffman from '~plugins/huffman'

  export default {
    data () {
      return {
        text: '',
        results: []
      }
    },

    methods: {
      calculate () {
        this.results = huffman(this.text)
      }
    }
  }
</script>

<style>
    #graphDiv {
        width: 100%;
        height: 500px;
    }

    #graphDiv > svg {
        width: 100%;
        height: 100%;
    }
</style>
