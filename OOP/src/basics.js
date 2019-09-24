class Drone {
  constructor(id, name, secretName) {
    this.id = id // instance property
    this.name = name
    this._secretName = secretName // private property - convention
  }

  fly() { // is placed in Drone.prototype
    console.log(`Drone ${this.id} is flying`)
  }

  static get maxHeight() { // static/class method that returns property via Drone.maxHeight (without parentheses due to get), we can't access it from instance
    return 2000
  }

  static getCompany() { // static/class property, getting value - Drone.maxHeight, we can't access it from instance
    console.log('in getCompany')
  }

  set secretName(value) {
    this._secretName = value
  }

  get secretName() {
    return this._secretName
  }
}



const drone = new Drone('A123', 'Flyer', 'Popo')
Drone.prop = 33 // static/class property
drone.fly()
drone._secretName = 'Fafa'
console.log(drone._secretName)
