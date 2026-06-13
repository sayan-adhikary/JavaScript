function Vehicle(type, model, avg, rating){
    this.type = type;
    this.model = model;
    this.avg = avg;
    this.rating = rating;
    this.price = function(){
        if(this.rating === 1) console.log("80k");
        else if(this.rating === 2) console.log("60k");
        else if(this.rating === 3) console.log("50k");
        else console.log("30K");
    }
}


let v1 = new Vehicle("4 Wheeler", "Tesla Model S", 15, 1);
v1.rating = 2;

v1.price();
