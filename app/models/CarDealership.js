export default class CarDealership {
  addCars(carsArr) {

    //NOTE option0
    if (!this.cars.length) {
      this.cars = carsArr
    }
    else {
      this.cars = this.cars.concat(carsArr)
    }

    // NOTE option1
    // this.cars.push(...carsArr)

    // NOTE option2
    // carsArr.forEach(car => {
    //   this.cars.push(car)
    // });
  }

  constructor() {
    this.cars = []
  }
}

