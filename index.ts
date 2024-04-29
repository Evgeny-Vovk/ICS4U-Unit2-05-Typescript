/**
 * This is the standard index.ts starting point.
 *
 * author  Evgeny Vovk
 * version 1.0
 * since   2024-04-25
 */

import Vehicle from './Vehicle'

// new Ford focus
console.log('Created Ford focus')
const fordFocus = new Vehicle('white', 'B40-C4RR0', 4, 284)

console.log('Status:')
fordFocus.status()

console.log('Accelerating, 10 of power for 10 sec.')
fordFocus.accelerate(10, 10)
console.log(`New speed: ${fordFocus.speed}`)

console.log('Changing colour to black:')
fordFocus.color = 'black'
console.log(`New color: ${fordFocus.color}`)

// new Ferrari
console.log('\nCreated a Ferrari')
const ferrari = new Vehicle('red', 'VHD-35HU', 2, 320)

console.log('Status:')
ferrari.status()

console.log('Accelerating, 100 of power for 4 sec.')
ferrari.accelerate(100, 4)
console.log(`New speed: ${ferrari.speed}`)

console.log('Breaking, 10 of power for 10 sec.')
ferrari.break(10, 10)
console.log(`New speed: ${ferrari.speed}`)

console.log('Changing color:')
ferrari.color = 'racing red!'
console.log(`New color: ${ferrari.color}`)


// new Citroen Ami
console.log('\nCreated a Citroen Ami')
const citroenAmi = new Vehicle('blue', 'FS-695-DQ', 2, 45)

console.log('Status:')
citroenAmi.status()

console.log('Accelerating, 5 of power for 10 sec.')
citroenAmi.accelerate(5, 10)
console.log(`New speed: ${citroenAmi.speed}`)

console.log('Breaking, 2 of power for 10 sec.')
citroenAmi.break(2, 10)
console.log(`New speed: ${citroenAmi.speed}`)

console.log('Changing color:')
citroenAmi.color = 'purple'
console.log(`New color: ${citroenAmi.color}`)

console.log("\nDone.")
