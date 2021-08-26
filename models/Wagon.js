class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.list = []
    }
    getAvailableSeatCount(){
        if((this.capacity - this.list.length) > 0){
            return (this.capacity - this.list.length)
        }
        return 0
    }
    join(name){
        if(this.getAvailableSeatCount() > 0){
            this.list.push(name)
        }
        return this.list
    }
    shouldQuarantine(){
        for(let i=0; i<this.list.length; i++){
            if((this.list[i].isHealthy) === false){
                return true
            }
        }
        return false
    }
    totalFood(){
        let result = 0
        for(let i=0; i<this.list.length; i++){
            result += this.list[i].food
        } 
        return result
    }
}

module.exports = Wagon;