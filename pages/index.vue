<template>
    <div>
        <div id="graphDiv">

        </div>
        <form>
            <input type="text" v-model="text">
            <button type="submit" @click.prevent="calculate">Посчитать</button>
        </form>
        <table v-if="results">
            <thead>
                <tr>
                    <th>Символ</th>
                    <th>Код</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="result in results">
                    <td>{{ result.symbol }}</td>
                    <td>{{ result.code }}</td>
                </tr>
            </tbody>
        </table>
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
