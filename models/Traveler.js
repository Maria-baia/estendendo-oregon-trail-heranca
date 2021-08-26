class Traveler {
    constructor(name){
        let traveler = this
        traveler.name = name
        traveler.food = 1
        traveler.isHealthy = true
    }
    hunt(){
        this.food += 2
    }
    eat(){
        if(this.food > 0){
            this.food --
        }else{
            this.isHealthy = false
        }
    }
}

module.exports = Traveler;