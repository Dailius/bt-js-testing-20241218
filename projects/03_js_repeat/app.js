function doSomething() {
    return "sveikas pasauli!";
}

console.log(doSomething)
console.log(doSomething.toString())
console.log(doSomething())
console.log(typeof doSomething())
console.log(typeof doSomething)

console.log('-'.repeat(100))

const doSomethingA = function () {
    return "doSomethingA in action";
}

console.log(doSomethingA())

const doSomethingB = () => {
    // some code logic here
    return "doSomethingB in action";
}

console.log(doSomethingB())

const doSomethingC = () => "doSomethingC in action";
console.log(doSomethingC())

console.log(`\n\t${'-'.repeat(100)}\n`)

const sumNumbers = (a, b) => a + b;
console.log(sumNumbers(5, 6))

const someFun = () => 10;

const sum3Numbers = (func, c) => {
    return func() + c;
}

console.log(sum3Numbers(someFun, 4))

// func as parameter
console.log(`\n${'-'.repeat(100)}\n`)

const calculate = (a, b) => a + b;
console.log(calculate(5, 6))

// const calculate = (...args) => args.reduce((s, v) => s + v, 0);
// console.log(calculate(1, 2, 3, 4));

const calculateAdv = (func, c, ...args) => {
    return func(...args) + c;
}

console.log(calculateAdv(calculate, 4, 5, 6))

// obj, list
console.log(`\n${'-'.repeat(100)}\n`)

const car1 = {
    type: "audi",
    year: 2000,
    engine:{
        kw: 80,
        cap: 1120,
        fuelType: "Diesel"
    }
}

const car2 = {
    type: "toyota",
    year: 2015,
    engine:{
        kw: 200,
        cap: 4254,
        fuelType: "98"
    }
}

cars = [car1, car2]

console.log(cars)
console.log(cars[1])
console.log(cars[1].type)
console.log(cars[0].engine)
console.log(cars[0].engine.kw)

cars.forEach(car => {
    console.log(`${car.type} | ${car.engine.kw}`)
});

console.log(`\n${'-'.repeat(100)}\n`)