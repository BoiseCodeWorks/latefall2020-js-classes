import Car from './models/Car.js'
import CarDealership from "./models/CarDealership.js";
// let car = {
//   make: "Chevy",
//   model: "Tracker",
//   year: 1989,
//   color: "Olive Drab"
// }


// let jimsCar = {
//   make: "Subaru",
//   model: "Forester",
//   year: 2017,
//   color: "Light Blue",
//   sound: "purrs quietly"
// }
// function startCar(car) {
//   console.log(car.sound);
// }




let jimsCar = new Car("Subaru", "Forester", 2017, "Light Blue", "purrs quietly")
let tracker = new Car("Chevy", "Tracker", 1989, "Olive Drab", "Clunk clunk VROOOM")
console.log(jimsCar);
jimsCar.startCar()
let cars = [jimsCar, tracker]
let carsShipment2 = [new Car("Honda", "Civic", 2001, "chartreuse", "Like a soda can with holes in it"), new Car("Ferrari", "488", 2020, "Baby Blue")]
console.log(carsShipment2);

// NOTE This gives our dev console and our page the ability to directly reference jimsCar
// with out it jimsCar still exists and can be utilized in main.js but not directly referenced on the page.
window["app"] = {
  jimsCar: jimsCar
}


let carDealership = new CarDealership()
carDealership.addCars(cars)
carDealership.addCars(carsShipment2)
console.log(carDealership.cars)


function drawCars() {
  let template = ""
  carDealership.cars.forEach(car => template += /*html*/`
  <div class="col-6">
    <h1>${car.make}</h1>
    <h3>${car.model}</h3>
    <h3>${car.year}</h3>
    <h3>${car.color}</h3>
    <button onclick="car.startCar()" disabled>Start Car</button>
  </div>
  `)
  document.querySelector("#cars").innerHTML = template
}

drawCars()