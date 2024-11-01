let car = {
  modelName:"Mersedes",
  brandName:"Brabus",
  horsePower: 5000,
  year:2020,
  millage:300,
  currentFuel:250,
  fuelCapacity:500,
  serviceHistory:[155,70,89,100],
  fuelFor1KM:15
}
 car.drive= function(drive){
    if(this.currentFuel>this.fuelFor1KM){
      this.millage++;
      this.currentFuel--;
    }
    else{
      console.log("Not enough fuel")
    }
    console.log(this.millage);
    console.log(this.currentFuel);
  }
car.age=function(){
  console.log(new Date().getFullYear()-this.year)
}
