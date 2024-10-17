const add = (numbers) => {
  if (!numbers) return 0

  let delimiter = /,|\n/

  if (numbers.startsWith('//')) {
    const delimiterEndIdx = numbers.indexOf('\n')
    delimiter = new RegExp(numbers.substring(2, delimiterEndIdx))
    numbers = numbers.substring(delimiterEndIdx + 1)
  }

  const numsArray = numbers.split(delimiter).map(Number)

  const negatives = numsArray.filter((num) => num < 0)
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(',')}`)
  }

  const sum = numsArray.reduce((acc, num) => acc + num, 0)
  return sum
}

module.exports = { add }
