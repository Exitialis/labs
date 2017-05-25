import StringParser from './module/StringParser'
import Graph from './module/graph'

let result = []

export default function run (str) {
  let queue = StringParser(str)

  let graph = new Graph()

  function sortQueue (arr) {
    return arr.sort((a, b) => {
      if (a.frequency > b.frequency) return 1
      if (b.frequency > a.frequency) return -1
      return 0
    })
  }

  while (queue.length > 1) {
    let symbol1 = queue.shift()
    let symbol2 = queue.shift()

    let parent1 = graph.addNode(symbol1.symbol)
    let parent2 = graph.addNode(symbol2.symbol)

    let resultFrequency = symbol1.frequency + symbol2.frequency
    let resultSymbol = symbol1.symbol + symbol2.symbol

    let child = graph.addNode(resultSymbol)

    graph.linkLeftParent(parent1, child)
    graph.linkRightParent(parent2, child)

    console.log(parent1, child)
    console.log(parent2, child)

    // Добавляем скрещенный символ в очередь
    queue.push({
      symbol: resultSymbol,
      frequency: resultFrequency
    })

    // Сортируем опять список
    queue = sortQueue(queue)
  }

  graph.render()
  iterateTree(graph.getGraph())

  return result
}

const iterateTree = (graph) => {
  let firstNode = graph.pop()
  console.log(firstNode)

  calculateNode('', firstNode)
}

const calculateNode = (value, node) => {
  if (node.leftParent === null) {
    result.push({
      symbol: node.name,
      code: value
    })

    return
  }

  let leftParent = node.leftParent
  let rightParent = node.rightParent

  calculateNode(value += '0', leftParent)
  calculateNode(value += '1', rightParent)

  console.log(value)
}
