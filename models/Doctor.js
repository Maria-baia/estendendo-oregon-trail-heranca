const Traveler = require("./Traveler")

class Doctor extends Traveler{
    constructor(name){
        super(name)
        let medico = this
        medico.food = 1
        medico.isHealthy = true
    }
    heal(traveler){
        traveler.isHealthy = true
    }
}

module.exports = Doctor