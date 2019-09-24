class Vehicle {
  constructor(licenseNumber) {
    this.licenseNumber = licenseNumber
    this.gpsEnabled = true
  }

  start() {
    console.log('starting Vehicle')
  }

  static getCompanyName() {
    console.log('My company')
  }

  static getNumber() {
    console.log(3)
  }
}

class Drone extends Vehicle {
  
}

class Car extends Vehicle {
  constructor(licenseNumber) {
    super(licenseNumber) // call super() first in constructor
    this.gpsEnabled = false // we override the value
  }

  start() {
    super.start()
    console.log('starting Car')
  }

  static getNumber() {
    super.getNumber()
    console.log(5)
  }

}

const car = new Car('A123')
console.log(car.licenseNumber) // A123
console.log(car.gpsEnabled) // false
car.start() // starting Vehicle and starting Car
Car.getCompanyName() // My company - static methods of Vehicle are accessible by any derived class, in this case - Car
Car.getNumber() // 3 and 5