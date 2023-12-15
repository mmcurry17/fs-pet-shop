// console.log(process.argv)

const { exit } = require(node.method)

console.log(process.argv)
if (process.argv.length > 2) {
    const command = process.argv[2];
    if (process.argv.length === 3 && command === "read") {
        console.log([
  { age: 7, kind: 'dog', name: 'fido' },
  { age: 5, kind: 'snake', name: 'Buttons' }
]);
    } if (process.argv.length === 4 && command === "read") {
        const readIndex = process.argv[3]
        console.log(typeof(readIndex))
        if (readIndex == 0) {
            console.log({ age: 7, kind: 'dog', name: 'fido' })
        } else if (readIndex == 1) {
            console.log({ age: 5, kind: 'snake', name: 'Buttons' }) 
        }
    }
}

// FileSystem.readFile('../pets.json', 'utf8', (error, data))

// console.error("Usage: node fs.js [read | create | update | destroy]")
// process.exit(1)