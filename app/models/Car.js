
let _privateVariable = "this is a private variable"
let defaultSound = undefined

// NOTE you can export either here or at the botoom of the file but NOT both
// export default class Car {
class Car {
  constructor(make, model, year, color, sound) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    // NOTE if no sound is supplied this will default to "VROOOM"
    this.sound = sound || defaultSound || "VROOM"
    this.milesLeftOnGasTank = 100
  }

  startCar() {
    console.log(this.sound);
    console.log(_privateVariable);
  }

  drive(milesToDrive) {
    this.milesLeftOnGasTank -= milesToDrive
    if (this.milesLeftOnGasTank < 0) {
      this.milesLeftOnGasTank = 0
      console.log(`Its outta gas.`);
      return
    }
    console.log(`There are ${this.milesLeftOnGasTank} miles left on the gas tank`);
  }
}


export default Car