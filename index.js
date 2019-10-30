// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `exampleFunction`
 * 
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them up.
 * 
 * For example, if we invoke `exampleFunction` passing 5 and 3,
 * the returned value should be 8.
*/
function exampleFunction(num1, num2) {
  return num1 + num2;
}

// ⭐️ Example Challenge end ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/**
 * ### Challenge `makePersonObject`
 * 
 * @instructions
 * This function should take an id, a name and an email as arguments,
 * and return an object with `id`, `name` and `email` properties.
 * 
 * For example, if we invoke `makePersonObject`
 * passing 5, 'Leia' and 'leia@leia.com' as arguments,
 * the returned value should look like:
 * {
 *   id: 5,
 *   name: "Leia",
 *   email: "leia@leia.com",
 * }
*/
function makePersonObject(id, name, email) {
  /* code here */
  return { 
    'id': id,
    'name': name,
    'email': email
  }
}

/**
 * ### Challenge `getName`
 * 
 * @instructions
 * This function takes as its only argument
 * an object containing a `name` property,
 * and return a string that reads `Hello, my name is {name}`,
 * where `{name}` is the name stored in the object.
 * 
 * For example, if we invoke `getName`
 * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
 * the returned value should look like `Hello, my name is Leia`.
*/
function getName(obj) {
  /* code here */
  return `Hello, my name is ${obj.name}`;
}

/**
 * ### Challenge `makeSmartPerson`
 * 
 * @instructions
 * This function takes a single `name` argument and returns an object.
 * The returned object has the following characteristics:
 *     It has a `name` property that contains the argument passed in.
 *     It has a `sum` method that takes two numbers as arguments
 *         and returns the result of adding them together.
 *     It has a `speak` method that takes no arguments
 *         and returns a string like `Hello, my name is {name}`.
 *         where `{name}` is the name passed into `makeSmartPerson`.
*/
function makeSmartPerson(name) {
  /* code here */
  return {
    'name': name,

    sum(num1, num2) {
      return num1 + num2;
    },

    speak() {
      return `Hello, my name is ${name}`
    },
  }
}

/**
 * ### Challenge `getCarInfoByIndex`
 * 
 * @instructions
 * getCarInfoByIndex takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired index in the array.
 * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoByIndex(carArr, index) {
  /* code here */
  const obj = carArr[index];
  return `This is a ${obj.car_make} ${obj.car_model}`
}

/**
 * ### Challenge `getLastCarInfo`
 * 
 * @instructions
 * getLastCarInfo takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
 * it will return `This is a Lincoln Town Car`.
*/
function getLastCarInfo(carArr) {
  /* code here */
  const obj = carArr[carArr.length - 1];
  return `This is a ${obj.car_make} ${obj.car_model}`
}

/**
 * ### Challenge `getCarInfoById`
 * 
 * @instructions
 * getCarInfoById takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired car id (see how each car has its own unique id).
 * getCarInfoById returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoById is invoked with the inventory and the number 1,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoById(carArr, carId) {
  /* code here */
  const idArr = carArr.map(car => car.id);
  const objIndex = idArr.indexOf(carId);
  const obj = carArr[objIndex];
  return `This is a ${obj.car_make} ${obj.car_model}`;
}

/**
 * ### Challenge `sortCarInventory`
 * 
 * @instructions
 * sortCarInventory takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * sortCarInventory returns an inventory that is sorted by car_model, ascending [A-Z].
*/
function sortCarInventory(carArr) {
  carArr.sort((x, y) => {
    const textA = x.car_model.toUpperCase();
    const textB = y.car_model.toUpperCase();
    return (textA < textB) ? -1 : (textB < textA) ? 1 : 0;
  })

  return carArr;
}

/**
 * ### Challenge `getModelYears`
 * 
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
*/
function getModelYears(carArr) {
  /* code here */

  return carArr.map(car => car.car_year);
}

/**
 * ### Challenge `getOlderCars`
 * 
 * @instructions
 * We need a utility to find older cars!
 * getOlderCars takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired max year.
 * getOlderCars returns an array containing all the cars
 * with a `car_year` which is at most the given desired max year,
 * in the same order as they appear in the original inventory.
*/
function getOlderCars(carArr, maxYear) {
  /* code here */
  return carArr.filter(car => car.car_year <= maxYear);
}

/**
 * ### Challenge `getGermanCars`
 * 
 * @instructions
 * We need a utility to find German cars!
 * getGermanCars takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getGermanCars returns an array containing all the cars
 * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
 * in the same order as they appear in the original inventory.
*/
function getGermanCars(carArr) {
  /* code here */
  return carArr.filter(car => car.car_make === 'Audi' || car.car_make === 'Mercedes-Benz' || car.car_make === 'Volkswagen' || car.car_make === 'BMW')
}

/**
 * ### Challenge refactor to arrow functions
 * 
 * @instructions
 * Create arrow function versions of the following commented-out functions:
 * 
const sum = (a, b) => a +b;
 * 
 * const addFive = num => num + 5; 
 *
 * const argTimesTwo = num => num * 2;
*/
const sum = (a, b) => a + b;
const addFive = num => num + 5;
const argTimesTwo = num => num * 2;
/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
*/
function carMaker(mileage) {
  /* code here */
  return {
    odometer: mileage,

    drive(distance) {
      return this.odometer += distance;
    }
  }
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (exampleFunction) { module.exports.exampleFunction = exampleFunction }
  if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
  if (getName) { module.exports.getName = getName }
  if (makeSmartPerson) { module.exports.makeSmartPerson = makeSmartPerson }
  if (carMaker) { module.exports.carMaker = carMaker }
  if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
  if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
  if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }
  if (sortCarInventory) { module.exports.sortCarInventory = sortCarInventory }
  if (getModelYears) { module.exports.getModelYears = getModelYears }
  if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
  if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
  if (sum) { module.exports.sum = sum }
  if (addFive) { module.exports.addFive = addFive }
  if (argTimesTwo) { module.exports.argTimesTwo = argTimesTwo }
}
