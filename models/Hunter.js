const Traveler = require("./Traveler")

class Hunter extends Traveler{
    constructor(name){
        super(name)
        let hunter = this
        hunter.food = 2
        hunter.isHealthy = true
    }
    hunt(){
        this.food += 5
    }
    eat(){
        if(this.food <= 0){
            this.isHealthy = false
        }
        this.food -= 2
    }
    giveFood(traveler, numOfFoodUnits){
        if(this.food > numOfFoodUnits){
            traveler.food += numOfFoodUnits
        }
    }
}

module.exports = Hunter