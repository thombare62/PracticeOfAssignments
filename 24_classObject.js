class Vehicle {
    constructor(brand, price, fuelType, wheelType){
  this.brand= brand,
  this.price= price,
  this.fuelType= fuelType,
  this.wheelType= wheelType
    }
  }
  console.log(``);
  console.log(`5 Objects from Vehicle class`);
  let hondaVehicle= new Vehicle("Honda", 850000, "Diesel", "4 Wheeler")
  let heroVehicle= new Vehicle("Hero Splendor", 87000, "Petrol", "2 Wheeler")
  let marutiVehicle= new Vehicle("Maruti Suzuki", 1050000, "Diesel", "4 Wheeler")
  let ktmVehicle= new Vehicle("KTM", 250000, "Petrol", "2 Wheeler")
  let tataVehicle= new Vehicle("Tata Prima Truck", 2500000, "Diesel", "16 Wheeler")
  
  console.log(hondaVehicle);
  console.log(heroVehicle);
  console.log(marutiVehicle);
  console.log(ktmVehicle);
  console.log(tataVehicle);
  
  class College{
  constructor(name, establishment, dean, courses){
  this.name= name
  this.establishment= establishment
  this.dean=dean
  this.courses= courses
  }
  showDetails(){
    console.log(`College Name= ${this.name}, Established In= ${this.establishment}, Dean= ${this.dean}, Courses Offered ${this.courses}`);
  }
  }
  
  let vjti= new College("VJTI Matunga Mumbai", 1887, "Madhukar Kakade", "Civil Engg, Mechanical Engg & Electrical Engg")
  let sp= new College("Sardar Patel Mumbai", 1920, "Damodar Kale", "Civil Engg, Mechanical Engg & Electrical Engg")
  let dvs= new College("Dnyan Vikas High School KoparKhairane", 1935, "Manoj Lande", "Medium and High School")
  let vp= new College(" VP College Baramati", 1945, "Sharad Pawar", "High School & Law")
  console.log(``);
  console.log(`Showing 4 college objects using objectname.showdetails( ) method`);
  console.log(``);
   vjti.showDetails()
   sp.showDetails()
   dvs.showDetails()
   vp.showDetails()
   console.log(``);
  console.log(`Showing object key and value using normal function and for in loop.`);
   function traverseObject(objectName){
  for (const key in objectName) {
    
      const element = objectName[key];
      
    console.log(`${key} ==> ${element}`);
    
  }
  
  }
   traverseObject(vjti); 
   console.log(``);
   traverseObject(sp); 
   console.log(``);
   traverseObject(dvs); 
   console.log(``);
   traverseObject(vp); 