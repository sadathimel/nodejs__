
const path = require('path')

const myCurrentPath = __filename

// console.log(path);

// console.log(path.basename(__dirname))
console.log(path.extname(myCurrentPath))

let pathObj = {
    dir: 'user/local',
    name: 'textFile',
    ext: '.js'
}

console.log(path.format(pathObj))


console.log(path.isAbsolute(myCurrentPath))
console.log(path.isAbsolute('math.js'))

console.log(path.join('math','user','local','hmnayam','test.js'))
console.log(path.resolve(__dirname,'math','user','local','hmnayam','test.js'))
console.log(path.parse(myCurrentPath))

