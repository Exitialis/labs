export default function getSymbolsWithFrequency (str) {
  let arr = str.split('')
  let temp = []

  for (let item of arr) {
    let index = temp.findIndex((el) => el.symbol === item)

    if (index === -1) {
      temp.push({
        symbol: item,
        frequency: 1
      })
    } else {
      temp[index].frequency += 1
    }
  }

  temp.sort(function (a, b) {
    if (a.frequency > b.frequency) return 1
    if (b.frequency > a.frequency) return -1
    return 0
  })

  return temp
}
