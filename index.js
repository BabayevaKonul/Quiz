let car = [{
  modelName:"Mersedes",
  brandName:"Brabus",
  horsePower: 5000,
  year:2020,
  millage:300,
  currentFuel:250,
  fuelCapacity:500,
  serviceHistory:[155,70,89,100],
  fuelFor1KM:15
},
{
  modelName:"BMW",
  brandName:"f10",
  horsePower: 6000,
  year:2010,
  millage:500,
  currentFuel:200,
  fuelCapacity:600,
  serviceHistory:[120,90,79,100],
  fuelFor1KM:18
},
{
  modelName:"Porshe",
  brandName:"a4",
  horsePower: 5500,
  year:2000,
  millage:500,
  currentFuel:290,
  fuelCapacity:515,
  serviceHistory:[165,90,85,170],
  fuelFor1KM:20
},
{
  modelName:"Audi",
  brandName:"b4",
  horsePower: 5900,
  year:2005,
  millage:900,
  currentFuel:350,
  fuelCapacity:555,
  serviceHistory:[95,92,75,270],
  fuelFor1KM:10
},
{
  modelName:"Kia",
  brandName:"i20",
  horsePower: 3500,
  year:2013,
  millage:700,
  currentFuel:310,
  fuelCapacity:455,
  serviceHistory:[250,120,35,70],
  fuelFor1KM:13
}]
 car.drive= function(drive){
    if(this.currentFuel>this.fuelFor1KM){
      this.millage++;
      this.currentFuel--;
    }
    else{
      console.log("Not enough fuel")
    }
  }
    console.log(this.millage);
    console.log(this.currentFuel);
  
car.age=function(){
}
console.log(new Date().getFullYear()-this.year)
