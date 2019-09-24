import { Car } from '../classes/car.js'
import { Drone } from '../classes/drone.js'
import { DataError } from '../services/data-error.js'

export class FleetDataService {
  constructor() {
    this.cars = []
    this.drones = []
    this.errors = []
  }

  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case 'car':
          const car = this.loadCar(data)
          this.cars.push(car)
          break
        case 'drone':
          const drone = this.loadDrone(data)
          this.drones.push(drone)
          break

        default:
          const error = new DataError('Invalid vehicle type', data)
          this.errors.push(error)
          break
      }
    }
  }

  loadCar(data) {
    try {
      const car = new Car(data.license, data.model, data.latLong)
      car.miles = data.miles
      car.make = data.make
      return car
    } catch (e) {
      this.errors.push(new DataError('error loading car', data))
    }
    return null
  }

  loadDrone(data) {
    try {
      const drone = new Car(data.license, data.model, data.latLong)
      drone.airTimeHours = data.airTimeHours
      drone.base = data.base
      return drone
    } catch (error) {
      this.errors.push(new DataError('error loading drone', data))
    }
    return null
  }
}
