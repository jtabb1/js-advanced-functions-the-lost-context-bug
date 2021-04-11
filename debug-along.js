
// let configuration = {
//     frontContent: "Happy Birthday, Odin One-Eye!",
//     insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
//     closing: {
//         "Thor": "Admiration, respect, and love",
//         "Loki": "Your son"
//     },
//     signatories: [
//         "Thor",
//         "Loki"
//     ]
// }

// console.log(configuration.closing.Thor);

// let printCard = function() {
//     console.log(this.frontContent)
//     console.log(this.insideContent)

//     this.signatories.forEach(function(signatory){
//         let message = `${this.closing[signatory]}, ${signatory}`
//         console.log(message)
//     }, this)
// }

// printCard.call(configuration)


let configuration = {
    frontContent: "Happy Birthday, Odin One-Eye!",
    insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
    closing: {
        "Thor": "Admiration, respect, and love",
        "Loki": "Your son"
    },
    signatories: [
        "Thor",
        "Loki"
    ]
}

let printCard = function() {
    console.log(this.frontContent)
    console.log(this.insideContent)
    // Wow! Elegant! And notice the arrow function's `this` is the same
    // this that printCard has by virtue of configuration being passed
    // in as a thisArg
    this.signatories.forEach(s => console.log(`${this.closing[s]}, ${s}`)
    )
}

printCard.call(configuration)






// let printCard = function() {
//     console.log(this.frontContent)
//     console.log(this.insideContent)
//     let contextBoundForEachExpr = function(signatory){
//         let message = `${this.closing[signatory]}, ${signatory}`
//         console.log(message)
//     }.bind(this)

//     this.signatories.forEach(contextBoundForEachExpr)
// }

// printCard.call(configuration)




// let printCard = function() {
//     console.log(this.frontContent)
//     console.log(this.insideContent)

//     let outerContext = this

//     this.signatories.forEach(function(signatory){
//         let message = `${outerContext.closing[signatory]}, ${signatory}`
//         console.log(message)
//     })
// }

// printCard.call(configuration)

// let greeter = (nameToGreet) => {
//     let message = `Good morning ${nameToGreet}`
//     console.log(message)
//     return "Greeted: " + nameToGreet
// }
// let result = greeter("Max") //=> "Greeted: Max"
// console.log(result);

// let greeter = function(nameToGreet) {
//     let message = `Good morning ${nameToGreet}`
//     console.log(message)
//     return "Greeted: " + nameToGreet
// }.bind(this)
// let result = greeter("Max Again") //=> "Greeted: Max Again"
// console.log(result);
