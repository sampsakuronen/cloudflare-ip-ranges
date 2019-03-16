const main = require('./index.js')

main.updateIPs().then((ips) => {
  const ipCount = Object.keys(ips)
    .map((version) => {
      return ips[version].length
    })
    .reduce((total, number) => total + number)

  if (ipCount > 0) {
    console.log(`Success: Got ${ipCount} IPs`)
    process.exit(0)
  } else {
    console.log('Fail: No IPs received')
    process.exit(1)
  }
})

setTimeout(() => {
  console.log('Fail: Request timeout')
  process.exit(1)
}, 20000)
