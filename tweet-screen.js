const webshot = require('webshot')
const fs = require('fs')

const main = () => {
  const urls = process.argv.slice(2)
  urls.forEach(takeScreenshot)
}

const takeScreenshot = (url, index) => {
  const imageFileName =  `${index}.png`
  webshot(url, imageFileName, onScreenTaken)
}

const onScreenTaken = (err) => {
  if (err) {
    console.error('An error occurred', err)
  }
}

main()
