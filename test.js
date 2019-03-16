const main = require('./index.js')

main
  .updateIPs()
  .then((ips) => {
    if (ips.length > 0) {
      console.log(`Success: Got ${ips.length} IPs`)
    } else {
      console.log('Fail: No IPs received')
    }
  })
  .then(() => {
    return main.updateIPs({versioned: true})
  })
  .then((versionedIPs) => {
    if (versionedIPs.V4.length > 0 && versionedIPs.V6.length > 0) {
      console.log(`Success: Got V4 and V6 IPs separately`)
      process.exit(0)
    } else {
      console.log('Fail: No IPs received')
      process.exit(1)
    }
  })

setTimeout(() => {
  console.log('Fail: Request timeout')
  process.exit(1)
}, 10000)
