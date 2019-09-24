import { Car } from './classes/car.js'
import { Drone } from './classes/drone.js'
import { fleet } from './fleet-data.js'
import { FleetDataService } from './services/fleet-data-service.js'

const dataService = new FleetDataService()
dataService.loadData(fleet)
console.log(dataService)

for (let e of dataService.errors) {
  console.log(e)
}