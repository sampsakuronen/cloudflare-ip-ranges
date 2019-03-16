const https = require('https')

const CLOUDFLARE_IP_URLS = {
  'V4': 'https://www.cloudflare.com/ips-v4',
  'V6': 'https://www.cloudflare.com/ips-v6'
}

let ips = {}

async function getJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      var body = ''

      res.on('data', (data) => {
        body += data
      })

      res.on('end', () => {
        resolve(body.trim().split('\n'))
      })
    })
      .on('error', (error) => {
        reject(error)
      })
  })
}

function updateIPs(options = { versioned: false }) {
  return Promise.all(
    Object.keys(CLOUDFLARE_IP_URLS).map(async (key) => {
      return getJSON(CLOUDFLARE_IP_URLS[key])
        .then((result) => {
          return [key, result]
        })
    })
  )
    .then((results) => {
      results.forEach(([version, ipSet]) => {
        ips[version] = ipSet
      })

      if (options.versioned) {
        return ips
      } else {
        return Object.values(ips).reduce((accu, x) => accu.concat(x))
      }
    })
}

module.exports = {
  updateIPs
}
